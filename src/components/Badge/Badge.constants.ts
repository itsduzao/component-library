import { getTypeSummary } from "../../utils/getTypeSummary";

export const BADGE_FORMATS = ['square', 'pill'] as const
export const BADGE_COLORS = ['gray', 'red', 'yellow', 'green',
  'blue', 'indigo', 'purple', 'pink'
] as const

export const BADGE_FORMAT_SUMMARY = getTypeSummary(BADGE_FORMATS);
export const BADGE_COLOR_SUMMARY = getTypeSummary(BADGE_COLORS);