import { useEffect, useState } from "react";
import movieApi from "../api/movieApi";

const useMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadMovies = async () => {
    try {
      const { data: popular } = await movieApi.getPopular();
      const { data: topRated } = await movieApi.getTopRated();
      const { data: upcoming } = await movieApi.getUpcoming();

      setPopularMovies(popular.results);
      setTopRatedMovies(topRated.results);
      setUpcomingMovies(upcoming.results);
    } catch (error) {
      console.error("Error loading movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return { popularMovies, topRatedMovies, upcomingMovies, loading };
};

export default useMovies;

