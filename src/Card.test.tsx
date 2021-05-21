import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";
import { CardTitle } from "./CardTitle";

test("matches default snap", () => {
  const { container } = render(<Card>test default card</Card>);
  expect(container.firstChild).toMatchSnapshot();
});

test("matches default snap outlined", () => {
  const { container } = render(<Card outlined>test outlined card</Card>);
  expect(container.firstChild).toMatchSnapshot();
});

test("matches snap with a card title", () => {
  const { container } = render(<Card outlined>test card with card title</Card>);
  expect(container.firstChild).toMatchSnapshot();
});
