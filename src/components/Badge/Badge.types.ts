import { BADGE_COLORS, BADGE_FORMATS } from "./Badge.constants";

export type BadgeFormat = typeof BADGE_FORMATS[number]
export type BadgeColor = typeof BADGE_COLORS[number]

export interface BadgeProps {
  children: React.ReactNode
  format?: BadgeFormat
  color?: BadgeColor
}