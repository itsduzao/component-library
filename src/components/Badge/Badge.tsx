import "./Badge.css";
import { BadgeProps } from "./Badge.types";

export function Badge({
  children,
  format = "square",
  color = "gray",
}: BadgeProps) {
  return <span className={`badge ${color} ${format}`}>{children}</span>;
}

