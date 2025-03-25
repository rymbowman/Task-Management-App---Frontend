import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#66BB6A", // light green
      light: "#CFE8CF", // super light green
      dark: "#5F8C5F", // darker green
      contrastText: "#ffffff", // white
    },
    secondary: {
      main: "#2E8B57", // dark green
      light: "#60B586", // light green
      dark: "#1F5C32", // darkest green
      contrastText: "#ffffff",
    },
    error: {
      main: "#d32f2f", // red
      light: "#ef5350", // light red
      dark: "#c62828", // dark red
      contrastText: "#ffffff",
    },
    info: {
      main: "#4682B4", // blue for in-progress
      light: "#5DADE2", // lighter blue
      dark: "#2C6A92", // darker blue
      contrastText: "#ffffff",
    },
    success: {
      main: "#8FBC8F", // same as primary for completed
      light: "#CFE8CF", //
      dark: "#5F8C5F",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  spacing: 8,
});

export default theme;
