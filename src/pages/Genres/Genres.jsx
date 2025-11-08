import { useEffect, useState } from "react";
import movieApi from "../../api/movieApi";
import MovieList from "../../components/MovieList/MovieList";

const Genres = () => {
  const [genres, setGenres] = useState([]);
  const [selected, setSelected] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieApi.getGenres().then(res => setGenres(res.data.genres));
  }, []);

  const loadMovies = (genreId) => {
    setSelected(genreId);
    fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
      }
    })
      .then(res => res.json())
      .then(data => setMovies(data.results));
  };

  return (
    <div className="genres-page">
      <h2>Géneros</h2>

      <div className="genres-list">
        {genres.map(g => (
          <button key={g.id} onClick={() => loadMovies(g.id)}>
            {g.name}
          </button>
        ))}
      </div>

      {selected && <MovieList movies={movies} />}
    </div>
  );
};

export default Genres;
