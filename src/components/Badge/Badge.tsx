import type { ReactElement } from "react";
import "./Badge.css";
import { BadgeProps } from "./Badge.types";

export function Badge({
  children,
  format = "square",
  color = "gray",
}: BadgeProps): ReactElement {
  return (
    <span
      className={`badge ${color} ${format}`}
      role="status"
      aria-label={`${color} badge: ${children}`}
    >
      {children}
    </span>
  );
}

