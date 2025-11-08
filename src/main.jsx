import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FavoritesProvider from "./context/FavoritesContext";
import "./assets/styles/main.scss"; // Importar estilos globales

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </React.StrictMode>
);
