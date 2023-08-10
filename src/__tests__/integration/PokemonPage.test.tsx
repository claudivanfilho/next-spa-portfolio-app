import { fireEvent, screen, waitFor, within } from "@testing-library/react";
import { rest } from "msw";

import { POKEMON_API_URL, POKEMON_SPECIE_API_URL } from "@/app/config/constants";
import { getPokemonSpecieResponse } from "../mockedResponses/PokemonSpecieResponse";
import { mockedServer } from "../jest.setup";
import { renderApp } from "../testUtils";

describe("Pokemon Page Use Cases", () => {
  test("renders BG with default color for pokemon with invalid color", async () => {
    mockedServer.use(
      rest.get(`${POKEMON_SPECIE_API_URL}/:pokemonId`, (req, res, ctx) => {
        const response = { ...getPokemonSpecieResponse(1) };
        response.color.name = "none";
        return res.once(ctx.json(response));
      })
    );

    renderApp({ route: "/generation/1/pokemon/bulbasaur" });

    const header = await screen.findByTestId("pokemon-header");
    expect(header).toMatchSnapshot();
  });

  test("displays pokemon info when initiated", async () => {
    renderApp({ route: "/generation/1/pokemon/bulbasaur" });

    const pokemonSection = await screen.findByTestId("pokemon-details-section");
    const pokemonHeader = await screen.findByTestId("pokemon-header");
    await within(pokemonHeader).findByAltText("bulbasaur");
    await within(pokemonSection).findByTestId("pokemon-evolution-stages");
    await within(pokemonSection).findByTestId("pokemon-stats");
    await within(pokemonSection).findByTestId("pokemon-header");
  });

  test("displays an error message when fetching pokemon fails", async () => {
    mockedServer.use(
      rest.get(`${POKEMON_API_URL}/bulbasaur`, (req, res, ctx) => {
        return res.once(ctx.status(500));
      })
    );

    renderApp({ route: "/generation/1/pokemon/bulbasaur" });

    await screen.findByText("Error on fetching pokemon");
  });

  test("changes page to clicked pokemon when pokemon evolution is clicked", async () => {
    renderApp({ route: "/generation/1/pokemon/bulbasaur" });

    const evolutionStages = await screen.findByTestId("pokemon-evolution-stages");

    await waitFor(() => expect(within(evolutionStages).getAllByRole("link").length).toBe(3));

    fireEvent.click(within(evolutionStages).getAllByRole("link")[1]);
    expect(window.location.pathname).toBe("/generation/1/pokemon/ivysaur");
  });

  test("displays error component when evolution fetching fails", async () => {
    mockedServer.use(
      rest.get(`${POKEMON_API_URL}/ivysaur`, (req, res, ctx) => {
        return res.once(ctx.status(500));
      })
    );

    renderApp({ route: "/generation/1/pokemon/bulbasaur" });

    await within(await screen.findByTestId("pokemon-evolution-stages")).findByText("Not Found");
  });
});
