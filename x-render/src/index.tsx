import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import React from "react";

const container = document.getElementById("root");

if (container) {
  const root = ReactDOM.createRoot(container);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
