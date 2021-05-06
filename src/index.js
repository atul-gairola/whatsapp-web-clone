import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider } from "@material-ui/core";
import { ChatboxContextProvider } from "./contexts/ChatboxContext";

import { theme } from "./theme";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ChatboxContextProvider>
        <App />
      </ChatboxContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
