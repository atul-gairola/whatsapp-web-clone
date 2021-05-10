import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider } from "@material-ui/core";

// contexts
import { ChatboxContextProvider } from "./contexts/ChatboxContext";
import { AuthProvider } from "./contexts/AuthContext";

import { theme } from "./theme";
import App from "./App";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <ChatboxContextProvider>
        <App />
      </ChatboxContextProvider>
    </AuthProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
