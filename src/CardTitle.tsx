import React, { FunctionComponent } from "react";
import clsx from "clsx";
import "./CardTitle.css";

interface CardTitleProps {
  title: string;
  subtitle?: string;
}

export const CardTitle: FunctionComponent<CardTitleProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="CardTitle">
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  );
};
