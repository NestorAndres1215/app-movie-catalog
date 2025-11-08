import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ movies = [], isSeries = false }) => {
  if (!movies || movies.length === 0) {
    return (
      <div className="text-center py-4">
        <p className="text-muted">No hay elementos para mostrar.</p>
      </div>
    );
  }

  return (
    <div className="row g-4">
      {movies.map((m) => (
        <div key={m.id} className="col-6 col-md-4 col-lg-3">
          <MovieCard movie={m} isSeries={isSeries} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
