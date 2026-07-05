import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Remove default browser spacing
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.backgroundColor = "#000";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);