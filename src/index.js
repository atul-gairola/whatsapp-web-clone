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
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ChatboxContextProvider>
          <App />
        </ChatboxContextProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
