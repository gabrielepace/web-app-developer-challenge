import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from "@mui/styles";
import theme from "./app/styles/theme";
import App from "./app/components/App";
import * as serviceWorker from "./app/services/serviceWorker";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
