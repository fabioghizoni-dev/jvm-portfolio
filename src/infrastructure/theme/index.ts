export const utils = {
  content: "content: '';",
  maxWidth: "max-width: ",
}

export const spacing = {
  8: ".5rem",
  md: "48rem",
  lg: "64rem",
  4: "0.25rem",
  40: "2.5rem",
  "1/2": "50%",
  "4/5": "80%",
  full: "100%",
  2: ".125rem",
  35: "2.188rem",
  45: "2.813rem",
  icon: "1.4rem",
  300: "18.75rem",
  fullDvh: "100dvh",
};

export const colors = {
  gray: "oklch(0.3904 0 0)",
  bgDark: "oklch(0.1448 0 0)",
  red: "oklch(0.6122 0.2082 22.24)",
  yellow: "oklch(0.8868 0.182186 95.3305)",
};

export const boxShadows = {
  red: "0 .25rem 1.25rem oklch(0.6122 0.2082 22.24 / 20%)",
};

export const translate = {
  y: { minus5: "translateY(-5px)" }
}

export const theme = {
  utils,
  colors,
  spacing,
  translate,
  boxShadows
};

export type Theme = typeof theme;