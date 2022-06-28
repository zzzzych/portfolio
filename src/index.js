import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Normalize } from "styled-normalize";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Spinner from "./components/Spinner";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <Provider store={store}>
        <BrowserRouter basename="/portfolio">
          <Normalize />
          <App />
        </BrowserRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
