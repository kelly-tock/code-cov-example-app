import React, { FunctionComponent } from "react";
import clsx from "clsx";
import "./Button.css";

interface ButtonProps {
  variant?: "primary" | "secondary";
}

export const Button: FunctionComponent<ButtonProps> = ({
  variant,
  children,
}) => {
  return (
    <button
      className={clsx("Button", variant ? `Button--${variant}` : undefined)}
    >
      {children}
    </button>
  );
};
