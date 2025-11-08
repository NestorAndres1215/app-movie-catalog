import { useEffect, useState } from "react";
import movieApi from "../../api/movieApi";
import MovieList from "../../components/MovieList/MovieList";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Por defecto cargamos las películas populares
    movieApi.getPopular().then(res => setMovies(res.data.results));
  }, []);

  return (
    <div className="movies-page">
      <h2>Películas</h2>
      {movies.length === 0 ? (
        <p>Cargando películas...</p>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default Movies;
