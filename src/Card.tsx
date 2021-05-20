import React, { FunctionComponent } from "react";
import clsx from "clsx";
import "./Card.css";

interface CardProps {
  outlined?: boolean;
}

export const Card: FunctionComponent<CardProps> = ({ outlined, children }) => {
  return (
    <div
      className={clsx("Card", {
        "Card--outlined": outlined,
      })}
    >
      {children}
    </div>
  );
};
