import React, { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import MovieList from "../../components/MovieList/MovieList";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="favorites-page">
      <h2>Mis Favoritos</h2>
      {favorites.length > 0 ? (
        <MovieList movies={favorites} />
      ) : (
        <p>No tienes películas en favoritos aún.</p>
      )}
    </div>
  );
};

export default Favorites;
