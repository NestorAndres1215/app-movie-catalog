import React, { useState } from "react";
import movieApi from "../../api/movieApi";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";

const Search = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const data = await movieApi.searchMovies(query);
      setResults(data);
    } catch (error) {
      console.error("Error al buscar películas:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-page">
      <h2>Buscar Películas</h2>
      <SearchBar onSearch={handleSearch} />
      {loading ? <p>Buscando...</p> : <MovieList movies={results} />}
    </div>
  );
};

export default Search;
