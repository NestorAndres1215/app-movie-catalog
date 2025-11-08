import { useEffect, useState } from "react";
import movieApi from "../../api/movieApi";
import MovieList from "../../components/MovieList/MovieList";

const Trending = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    movieApi.getTrendingMovies().then(res => setMovies(res.data.results));
    movieApi.getTrendingSeries().then(res => setSeries(res.data.results));
  }, []);

  return (
    <div className="trending-page">
      <h2>Películas en Tendencia</h2>
      <MovieList movies={movies} />

      <h2>Series en Tendencia</h2>
      <MovieList movies={series} isSeries />
    </div>
  );
};

export default Trending;
