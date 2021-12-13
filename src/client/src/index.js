import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Layout from "./components/Layout";
import { routes } from "./data/routes";

ReactDOM.render(
  <React.StrictMode>
    <Layout routes={routes}>
      <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);
