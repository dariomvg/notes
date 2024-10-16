import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import ProviderNotes from "./contexts/ContextNotes.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <ProviderNotes>
        <App />
      </ProviderNotes>
  </React.StrictMode>
);
