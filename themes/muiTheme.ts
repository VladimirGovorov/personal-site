"use client";
import { blue, pink } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

let appTheme = createTheme({
  // Theme customization goes here as usual, including tonalOffset and/or
  // contrastThreshold as the augmentColor() function relies on these
});

appTheme = createTheme(appTheme, {
  // Custom colors created with augmentColor go here
  palette: {
    primary: {
      main: "#fbae38",
      red: "#fc5252",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#fc5252",
      //   light: "#F5EBFF",
      // dark: will be calculated from palette.secondary.main,
      //   contrastText: "#47008F",
    },
  },
});

export default appTheme;
