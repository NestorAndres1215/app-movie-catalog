import { useState } from "react";
import movieApi from "../../api/movieApi";
import MovieList from "../../components/MovieList/MovieList";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const search = () => {
    if (!query) return;
    movieApi.searchMovie(query).then(res => setResults(res.data.results));
  };

  return (
    <div className="search-page">
      <h2>Buscar Películas</h2>
      <input
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={search}>Buscar</button>

      <MovieList movies={results} />
    </div>
  );
};

export default Search;
