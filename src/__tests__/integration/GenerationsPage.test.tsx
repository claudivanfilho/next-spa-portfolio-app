import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";

import { GENERATION_API_URL } from "@/app/config/constants";

import { mockedServer } from "../jest.setup";
import { renderApp } from "../testUtils";

describe("Generations Page Use Cases", () => {
  test("renders the generations page when initiated", async () => {
    renderApp();
    await screen.findByText(/Generation I/, { selector: "a" });
  });

  test("displays an error message when fetching generations fails", async () => {
    mockedServer.use(
      rest.get(`${GENERATION_API_URL}`, (req, res, ctx) => {
        return res.once(ctx.status(500));
      })
    );

    renderApp();

    await screen.findByText("Error on fetching generations");
  });

  test("redirects to generation page when a generation link is clicked", async () => {
    renderApp();

    const generationLink = await screen.findByText(/Generation I/, { selector: "a" });
    fireEvent.click(generationLink);

    expect(window.location.pathname).toBe("/generation/1");
  });

  test("changes the page language when the lang selector is changed", async () => {
    renderApp();
    await screen.findByText(/Generation I/, { selector: "a" });

    const langSelect = screen.getByTestId("lang-select");
    userEvent.selectOptions(langSelect, "fr");

    await screen.findByText("Créé par Claudivan");
  });
});
