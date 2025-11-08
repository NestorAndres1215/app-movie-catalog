import { useFavorites } from "../../context/FavoritesContext";
import MovieList from "../../components/MovieList/MovieList";

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="favorites-page">
      <h2>Mis Favoritos</h2>
      {favorites.length === 0 ? <p>No tienes favoritos aún.</p> : <MovieList movies={favorites} />}
    </div>
  );
};

export default Favorites;
