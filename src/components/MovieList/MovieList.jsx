import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ movies = [], isSeries = false }) => {
  // Si movies no está definido o está vacío, no rompe el map
  if (!movies || movies.length === 0) {
    return <p>No hay elementos para mostrar.</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} isSeries={isSeries} />
      ))}
    </div>
  );
};

export default MovieList;
