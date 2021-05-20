import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

test("matches default snap", () => {
  const { container } = render(<Card>test default button</Card>);
  expect(container.firstChild).toMatchSnapshot();
});
