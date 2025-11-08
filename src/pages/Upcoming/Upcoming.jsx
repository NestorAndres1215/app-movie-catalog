import { useEffect, useState } from "react";
import movieApi from "../../api/movieApi";
import MovieList from "../../components/MovieList/MovieList";

const Upcoming = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieApi.getUpcoming().then(res => setMovies(res.data.results));
  }, []);

  return (
    <div className="upcoming-page">
      <h2>Próximos Estrenos</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default Upcoming;
