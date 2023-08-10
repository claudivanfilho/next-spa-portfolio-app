import { fireEvent, screen, within } from "@testing-library/react";
import { rest } from "msw";

import { GENERATION_API_URL } from "@/app/config/constants";
import { mockedServer } from "../jest.setup";
import { GENERATION_REPONSE_MOCK } from "../mockedResponses/GenerationResponseMock";
import { renderApp } from "../testUtils";

describe("Use cases of the Generation Page", () => {
  test("displays page info when initiated", async () => {
    renderApp({ route: "/generation/1" });

    await screen.findByText(GENERATION_REPONSE_MOCK.main_region.name);
    await screen.findByText(`Pokemons: ${GENERATION_REPONSE_MOCK.pokemon_species.length}`);
  });

  test("displays error message when initiation has an error", async () => {
    mockedServer.use(
      rest.get(`${GENERATION_API_URL}/1`, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    renderApp({ route: "/generation/1" });

    await screen.findByText("Error on fetching generations");
  });

  test("redirects to pokemon page when a pokemon is clicked", async () => {
    renderApp({ route: "/generation/1" });
    const pokemonLink = await within(await screen.findByTestId("pokemon-listing")).findByText(
      "bulbasaur",
      { selector: "a" }
    );

    expect(screen.queryByTestId("pokemon-details-section")).not.toBeInTheDocument();

    fireEvent.click(pokemonLink);

    expect(window.location.pathname).toBe("/generation/1/pokemon/bulbasaur");
  });

  test("displays correct pokemon when searching", async () => {
    renderApp({ route: "/generation/1" });

    const wrapper = await screen.findByTestId("pokemon-listing");
    const searchInput = within(wrapper).getByLabelText("Search for a pokemon");
    fireEvent.change(searchInput, { target: { value: "but" } });

    const pokemonsResult = within(wrapper).queryAllByRole("link");
    const expectedPokemons = ["kabuto", "butterfree", "kabutops"];

    expect(pokemonsResult.length).toBe(expectedPokemons.length);
    pokemonsResult.forEach((pokemonResult, index) => {
      expect(pokemonResult.innerHTML).toBe(expectedPokemons[index]);
    });
  });

  test("displays nothing when searching for an unknown pokemon", async () => {
    renderApp({ route: "/generation/1" });

    const wrapper = await screen.findByTestId("pokemon-listing");
    const searchInput = within(wrapper).getByLabelText("Search for a pokemon");
    fireEvent.change(searchInput, { target: { value: "bbb" } });

    const pokemonsResultList = within(wrapper).queryAllByRole("link");
    expect(pokemonsResultList.length).toBe(0);
  });
});
