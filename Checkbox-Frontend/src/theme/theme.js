import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8FBC8F",
    },
    secondary: {
      main: "#2E8B57",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  spacing: 8,
});

export default theme;
