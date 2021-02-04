import {fireEvent, render, screen} from "@testing-library/react";
import App from "./components/App/App";
import React from "react";
import Counter from "./components/Counter/Counter";

test("renders learn react link", () => {
    render(<App/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

test("increment", async () => {
    render(<Counter/>);

    fireEvent.click(screen.getByText("Click Normal++"));

    screen.getByText("You clicked Normal 1 times");
});
