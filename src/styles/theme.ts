import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f3bd67",
    },
    secondary: {
      main: "#8d6e63",
    },
    background: {
      default: "#0b1723",
      paper: "#0b1723",
    },
    divider: "#383a3c",
    text: {
      primary: "#dedede",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#0b1723",
        },
      },
    },
  },
});

export { theme };
