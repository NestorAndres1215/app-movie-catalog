import { useState } from "react";
import movieApi from "../../api/movieApi";
import MovieList from "../../components/MovieList/MovieList";

const Search = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    movieApi.searchMovie(query).then(res => setMovies(res.data.results));
  };

  return (
    <div>
      <h1>Buscar Películas</h1>
      <form onSubmit={handleSearch}>
        <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Buscar..." />
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default Search;
