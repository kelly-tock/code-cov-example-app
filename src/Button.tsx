import React, { FunctionComponent } from "react";
import clsx from "clsx";
import "./Button.css";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  startIcon?: React.ReactNode;
}

export const Button: FunctionComponent<ButtonProps> = ({
  variant,
  size = "medium",
  children,
  startIcon,
}) => {
  return (
    <button
      className={clsx("Button", {
        [`Button--${variant}`]: variant,
        [`Button--${size}`]: size,
      })}
    >
      {startIcon && <span className="Button--startIcon">{startIcon}</span>}
      {children}
    </button>
  );
};
