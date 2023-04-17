import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";

import { GENERATION_API_URL } from "@/app/config/constants";
import { mockedServer } from "../jest.setup";
import { renderApp } from "../testUtils";

describe("Use cases of the initial page (Generations Page)", () => {
  test("when initiated should render the generations page", async () => {
    renderApp();
    await screen.findByText(/Generation I/, { selector: "a" });
  });

  test("when occurs an error fetching the generations should display an error message", async () => {
    mockedServer.use(
      rest.get(`${GENERATION_API_URL}`, (req, res, ctx) => {
        return res.once(ctx.status(500));
      })
    );

    renderApp();

    await screen.findByText("Error on fetching generations");
  });

  test("when clicked in a generation link should redirect to generation page", async () => {
    renderApp();

    const generationLink = await screen.findByText(/Generation I/, { selector: "a" });
    fireEvent.click(generationLink);

    expect(window.location.pathname).toBe("/generation/1");
  });

  test("when changed the lang selector should change the language of the page", async () => {
    renderApp();
    await screen.findByText(/Generation I/, { selector: "a" });

    const langSelect = screen.getByTestId("lang-select");
    userEvent.selectOptions(langSelect, "fr");

    await screen.findByText("Générations");
  });
});
