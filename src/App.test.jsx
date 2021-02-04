import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import App from "./components/App/App";
import React from "react";
import Counter from "./components/Counter/Counter";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("increment", async () => {
  render(<Counter/>);

  fireEvent.click(screen.getByText("Click Normal++"));

  await waitFor(() => screen.getByRole("p"));

  // expect(screen.getByRole("heading")).toHaveTextContent("hello there");
  // expect(screen.getByRole("button")).toHaveAttribute("disabled");
});
