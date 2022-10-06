import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App";
import "vazirmatn/Vazirmatn-font-face.css";
import { StyledEngineProvider } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import GlobalTheme from "./Components/GlobalTheme/GlobalTheme";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={GlobalTheme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
