import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderApp } from "../testUtils";

describe("Header Use Cases", () => {
  test("returns to the previous page when the back button is clicked", async () => {
    renderApp();

    const generationLink = await screen.findByText(/Generation I/, { selector: "a" });
    fireEvent.click(generationLink);

    expect(window.location.pathname).toBe("/generation/1");

    const backButton = await screen.findByText(/Back/, { selector: "button" });
    fireEvent.click(backButton);

    await waitFor(() => expect(window.location.pathname).toBe("/"));
  });
});
