import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import GlobalThemeStyles from "./styles/global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <GlobalThemeStyles />
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);
