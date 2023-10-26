import "./index.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import store from "./app/store.js";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
