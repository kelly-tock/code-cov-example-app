import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("matches default snap", () => {
  const { container } = render(<Button>test default button</Button>);
  expect(container.firstChild).toMatchSnapshot();
});

test("renders a start icon", () => {
  const { container } = render(
    <Button startIcon={<>&lozenge;</>}>test default button</Button>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("renders an end icon", () => {
  const { container } = render(
    <Button endIcon={<>&loang;</>}>test default button</Button>
  );
  expect(container.firstChild).toMatchSnapshot();
});
