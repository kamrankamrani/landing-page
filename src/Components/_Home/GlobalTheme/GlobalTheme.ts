import { createTheme } from "@mui/material/styles";

const GlobalTheme = createTheme({
  typography: {
    fontFamily: [
      "Vazirmatn",
      "sans-serif",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
    ].join(","),
  },
});

export default GlobalTheme;
