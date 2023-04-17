import { fireEvent, screen, within } from "@testing-library/react";
import { rest } from "msw";

import { GENERATION_API_URL } from "@/app/config/constants";
import { mockedServer } from "../jest.setup";
import { GENERATION_REPONSE_MOCK } from "../mockedResponses/GenerationResponseMock";
import { renderApp } from "../testUtils";

describe("Use cases of the Generation Page", () => {
  test("when initiated the generation page should display the page info", async () => {
    renderApp({ route: "/generation/1" });

    await screen.findByText(GENERATION_REPONSE_MOCK.main_region.name);
    await screen.findByText(`Pokemons: ${GENERATION_REPONSE_MOCK.pokemon_species.length}`);
  });

  test("when initiated the generation page with error should display the error message", async () => {
    mockedServer.use(
      rest.get(`${GENERATION_API_URL}/1`, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    renderApp({ route: "/generation/1" });

    await screen.findByText("Error on fetching generations");
  });

  test("when clicked in a pokemon in the listing should redirec to pokemon page", async () => {
    renderApp({ route: "/generation/1" });
    const pokemonLink = await within(await screen.findByTestId("pokemon-listing")).findByText(
      "bulbasaur",
      { selector: "a" }
    );

    expect(screen.queryByTestId("pokemon-details-section")).not.toBeInTheDocument();

    fireEvent.click(pokemonLink);

    expect(window.location.pathname).toBe("/generation/1/pokemon/bulbasaur");
  });

  test("when searching for a pokemon should display the correct one in the listing", async () => {
    renderApp({ route: "/generation/1" });

    const wrapper = await screen.findByTestId("pokemon-listing");
    const searchInput = within(wrapper).getByLabelText("Search for a pokemon");
    fireEvent.change(searchInput, { target: { value: "but" } });

    const pokemonsResult = within(wrapper).queryAllByRole("link");
    expect(pokemonsResult.length).toBe(3);
    expect(pokemonsResult[0].innerHTML).toBe("kabuto");
    expect(pokemonsResult[1].innerHTML).toBe("butterfree");
    expect(pokemonsResult[2].innerHTML).toBe("kabutops");
  });

  test("when searching for an unknown pokemon should display nothing in the listing", async () => {
    renderApp({ route: "/generation/1" });

    const wrapper = await screen.findByTestId("pokemon-listing");
    const searchInput = within(wrapper).getByLabelText("Search for a pokemon");
    fireEvent.change(searchInput, { target: { value: "bbb" } });

    const pokemonsResultList = within(wrapper).queryAllByRole("link");
    expect(pokemonsResultList.length).toBe(0);
  });
});
