import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import '../../assets/styles/movieCard.scss'
const MovieCard = ({ movie }) => {
  const placeholderImg = "https://i.imgur.com/7oVx45v.png"; // Puedes cambiar por uno de película

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card-link">
      <div className="movie-card">
        <div className="movie-img-wrapper">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : placeholderImg
            }
            alt={movie.title}
            className="movie-img"
            loading="lazy"
          />
          <div className="movie-overlay">
            <h3 className="movie-title-overlay">{movie.title}</h3>
            <div className="movie-info-overlay">
              <span className="movie-year">
                {movie.release_date?.split("-")[0] || "N/A"}
              </span>
              <span className="movie-rating">
                <FaStar className="star-icon" />
                {movie.vote_average?.toFixed(1) || "0"}
              </span>
            </div>
          </div>
        </div>

        <div className="movie-info p-3">
          <h3 className="movie-title mb-1">{movie.title}</h3>
          <p className="movie-year text-muted small">
            {movie.release_date?.split("-")[0] || "Año desconocido"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;