import MovieList from "../../components/MovieList/MovieList";
import useMovies from "../../hooks/useMovies";

const Home = () => {
  const { popularMovies, topRatedMovies, upcomingMovies, loading } = useMovies();

  if (loading) return <p>Cargando películas...</p>;

  return (
    <div className="home-page">
      <h2>Populares</h2>
      <MovieList movies={popularMovies} />

      <h2>Mejor valoradas</h2>
      <MovieList movies={topRatedMovies} />

      <h2>Próximos estrenos</h2>
      <MovieList movies={upcomingMovies} />
    </div>
  );
};

export default Home;
