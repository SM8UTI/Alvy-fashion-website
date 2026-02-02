import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CobrowseIO from "cobrowse-sdk-js";
import App from "./App";
import "./index.scss";

// Cobrowse.io – co-browsing support
CobrowseIO.license = "3DktgwtXuOCMSA";
CobrowseIO.start();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
