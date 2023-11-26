"use client";

import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    red: Palette["primary"];
  }
  interface PaletteOptions {
    red: PaletteOptions["primary"];
  }
}

let appTheme = createTheme({
  // Theme customization goes here as usual, including tonalOffset and/or
  // contrastThreshold as the augmentColor() function relies on these
});

appTheme = createTheme(appTheme, {
  // Custom colors created with augmentColor go here
  palette: {
    primary: {
      main: "#fbae38",
    },
    red: {
      main: "#fc5252",
    },
  },
});

export default appTheme;
