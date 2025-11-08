
import MovieList from "../../components/MovieList/MovieList";
import useMovies from "../../hooks/useMovies";

const Home = () => {
  const { popularMovies, topRatedMovies, upcomingMovies, loading } = useMovies();

  if (loading) return <p>Cargando películas...</p>;

  return (
    <div className="home-container">
      <h2>Películas Populares</h2>
      <MovieList movies={popularMovies} />

      <h2>Más Valoradas</h2>
      <MovieList movies={topRatedMovies} />

      <h2>Próximos Estrenos</h2>
      <MovieList movies={upcomingMovies} />
    </div>
  );
};

export default Home;
