import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./state/store";
import { PersistGate } from "redux-persist/integration/react";
import axios from "axios";

if (process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = "http://localhost:4000";
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
