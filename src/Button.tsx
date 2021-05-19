import React, { FunctionComponent } from "react";
import clsx from "clsx";
import "./Button.css";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}

export const Button: FunctionComponent<ButtonProps> = ({
  variant,
  size = "medium",
  children,
}) => {
  return (
    <button
      className={clsx("Button", {
        [`Button--${variant}`]: variant,
        [`Button--${size}`]: size,
      })}
    >
      {children}
    </button>
  );
};
