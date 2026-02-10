import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import { theme } from "./infrastructure/theme/index.ts";
import { AppRouter } from "./router/index.tsx";

const GlobalStyles = createGlobalStyle`
  html {
    font-synthesis: none;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;

    a {
      text-decoration: none;
    }
  }

  body, input, button, textarea {
    margin: 0;
    letter-spacing: -0.07em;
    font-family: Goldman, "Courier New", Courier, monospace;
  }

  #app {
    display: flex;
    min-height: ${theme.spacing.fullDvh};
    background-size: cover;
    flex-direction: column;
    overflow: hidden;
    background-color: ${theme.colors.bgDark};
    background-image: url(/bg.png);
  }
`;

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <GlobalStyles />
    <AppRouter />
  </StrictMode>
);