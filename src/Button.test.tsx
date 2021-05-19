import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("renders learn react link", () => {
  const { asFragment } = render(<Button>test default button</Button>);
  expect(asFragment).toMatchSnapshot();
});
