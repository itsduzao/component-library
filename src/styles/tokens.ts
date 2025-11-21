export const tokens = {
  colors: {
    // Grays
    gray50: 'var(--gray-50)',
    gray100: 'var(--gray-100)',
    gray500: 'var(--gray-500)',
    gray800: 'var(--gray-800)',
    gray900: 'var(--gray-900)',

    // Blues
    blue50: 'var(--blue-50)',
    blue100: 'var(--blue-100)',
    blue600: 'var(--blue-600)',
    blue700: 'var(--blue-700)',
    blue800: 'var(--blue-800)',

    // Reds
    red50: 'var(--red-50)',
    red100: 'var(--red-100)',
    red700: 'var(--red-700)',
    red800: 'var(--red-800)',

    // Greens
    green50: 'var(--green-50)',
    green100: 'var(--green-100)',
    green700: 'var(--green-700)',
    green800: 'var(--green-800)',

    // Yellows
    yellow50: 'var(--yellow-50)',
    yellow100: 'var(--yellow-100)',
    yellow700: 'var(--yellow-700)',
    yellow800: 'var(--yellow-800)',

    // Indigos
    indigo100: 'var(--indigo-100)',
    indigo800: 'var(--indigo-800)',

    // Purples
    purple100: 'var(--purple-100)',
    purple800: 'var(--purple-800)',

    // Pinks
    pink100: 'var(--pink-100)',
    pink800: 'var(--pink-800)',
  },

  fontSizes: {
    sm: 'var(--text-sm)',
    base: 'var(--text-base)',
    lg: 'var(--text-lg)',
  },

  fontWeights: {
    normal: 'var(--font-normal)',
    medium: 'var(--font-medium)',
    semibold: 'var(--font-semibold)',
  },

  spacing: {
    2: 'var(--space-2)',
    3: 'var(--space-3)',
    4: 'var(--space-4)',
    6: 'var(--space-6)',
    8: 'var(--space-8)',
    12: 'var(--space-12)',
  },

  radius: {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)',
  },

  shadows: {
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
  },

  lineHeights: {
    tight: 'var(--leading-tight)',
    snug: 'var(--leading-snug)',
    normal: 'var(--leading-normal)',
    relaxed: 'var(--leading-relaxed)',
  },
} as const;

// Type helpers
export type ColorToken = keyof typeof tokens.colors;
export type FontSizeToken = keyof typeof tokens.fontSizes;
export type FontWeightToken = keyof typeof tokens.fontWeights;
export type SpacingToken = keyof typeof tokens.spacing;
export type RadiusToken = keyof typeof tokens.radius;
export type ShadowToken = keyof typeof tokens.shadows;
export type LineHeightToken = keyof typeof tokens.lineHeights;
