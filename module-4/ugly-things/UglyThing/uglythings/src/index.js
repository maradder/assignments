import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UglyContextProvider } from "./context/UglyThingsContext.js";

ReactDOM.render(
  <React.StrictMode>
    <UglyContextProvider>
      <App />
    </UglyContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
