import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ProviderTheme from "./contexts/ContextTheme.jsx";
import ProviderNotes from "./contexts/ContextNotes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProviderTheme>
      <ProviderNotes>
        <App />
      </ProviderNotes>
    </ProviderTheme>
  </React.StrictMode>
);
