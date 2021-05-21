import React from "react";
import { render, screen } from "@testing-library/react";
import { CardTitle } from "./CardTitle";

test("matches default snap", () => {
  const { container } = render(<CardTitle title="title" />);
  expect(container.firstChild).toMatchSnapshot();
});

test("matches default snap with subtitle", () => {
  const { container } = render(<CardTitle title="title" subtitle="subtitle" />);
  expect(container.firstChild).toMatchSnapshot();
});
