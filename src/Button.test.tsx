import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("matches default snap", () => {
  const { asFragment } = render(<Button>test default button</Button>);
  expect(asFragment).toMatchSnapshot();
});

test("renders a start icon", () => {
  const { asFragment } = render(
    <Button startIcon={<>&lozenge;</>}>test default button</Button>
  );
  expect(asFragment).toMatchSnapshot();
});

test("renders an end icon", () => {
  const { asFragment } = render(
    <Button endIcon={<>&loang;</>}>test default button</Button>
  );
  expect(asFragment).toMatchSnapshot();
});
