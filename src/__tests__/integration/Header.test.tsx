import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderApp } from "../testUtils";

describe("Use cases of Header", () => {
  test("when back button is clicked should return to the previous page", async () => {
    renderApp();

    const generationLink = await screen.findByText(/Generation I/, { selector: "a" });
    fireEvent.click(generationLink);

    expect(window.location.pathname).toBe("/generation/1");

    const backButton = await screen.findByText(/Back/, { selector: "button" });
    fireEvent.click(backButton);

    await waitFor(() => expect(window.location.pathname).toBe("/"));
  });
});
