import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SubscriptionsContextProvider } from "./context/Context";
import { FeedContextProvider } from "./context/Context";

ReactDOM.render(
  <React.StrictMode>
    <SubscriptionsContextProvider>
      <FeedContextProvider>
        <App />
      </FeedContextProvider>
    </SubscriptionsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
