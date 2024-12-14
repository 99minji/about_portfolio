import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ReactModal from "react-modal";
import { ModalsProvider } from "./context/ModalsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

ReactModal.setAppElement("#root");

root.render(
  <React.StrictMode>
    <ModalsProvider>
      <App />
    </ModalsProvider>
  </React.StrictMode>
);
