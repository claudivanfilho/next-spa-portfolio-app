import { fireEvent, screen, waitFor, within } from "@testing-library/react";
import { rest } from "msw";

import { POKEMON_API_URL, POKEMON_SPECIE_API_URL } from "@/app/config/constants";
import { getPokemonSpecieResponse } from "../mockedResponses/PokemonSpecieResponse";
import { mockedServer } from "../jest.setup";
import { renderApp } from "../testUtils";

describe("Use cases of the Pokemon Page", () => {
  test("when initiated the Pokemon Page should display the pokemon info", async () => {
    renderApp({ route: "/generation/1/pokemon/bulbasaur" });

    const pokemonSection = await screen.findByTestId("pokemon-details-section");
    const pokemonHeader = await screen.findByTestId("pokemon-header");
    await within(pokemonHeader).findByAltText("bulbasaur");
    await within(pokemonSection).findByTestId("pokemon-evolution-stages");
    await within(pokemonSection).findByTestId("pokemon-stats");
    await within(pokemonSection).findByTestId("pokemon-header");
  });

  test("when initiated the Pokemon Page with error should display the error message", async () => {
    mockedServer.use(
      rest.get(`${POKEMON_API_URL}/bulbasaur`, (req, res, ctx) => {
        return res.once(ctx.status(500));
      })
    );

    renderApp({ route: "/generation/1/pokemon/bulbasaur" });

    await screen.findByText("Error on fetching pokemon");
  });

  test("when clicked in the pokemon evolution should change the page to the clicked pokemon", async () => {
    renderApp({ route: "/generation/1/pokemon/bulbasaur" });

    const evolutionStages = await screen.findByTestId("pokemon-evolution-stages");

    await waitFor(() => expect(within(evolutionStages).getAllByRole("link").length).toBe(3));

    fireEvent.click(within(evolutionStages).getAllByRole("link")[1]);
    expect(window.location.pathname).toBe("/generation/1/pokemon/ivysaur");
  });

  test("when occurs an error when fetching the evolution should display the error component", async () => {
    mockedServer.use(
      rest.get(`${POKEMON_API_URL}/ivysaur`, (req, res, ctx) => {
        return res.once(ctx.status(500));
      })
    );

    renderApp({ route: "/generation/1/pokemon/bulbasaur" });

    await within(await screen.findByTestId("pokemon-evolution-stages")).findByText("Not Found");
    await within(await screen.findByTestId("pokemon-evolution-stages")).findByText("Not Found");
  });

  test("when the pokemon selected has a invalid color should render the BG with the default color", async () => {
    mockedServer.use(
      rest.get(`${POKEMON_SPECIE_API_URL}/:pokemonId`, (req, res, ctx) => {
        const response = { ...getPokemonSpecieResponse(1) };
        response.color.name = "test";
        return res.once(ctx.json(response));
      })
    );

    renderApp({ route: "/generation/1/pokemon/bulbasaur" });

    const header = await screen.findByTestId("pokemon-header");
    expect(header).toMatchSnapshot();
  });
});
