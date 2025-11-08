import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieApi from "../../api/movieApi";
import Loader from "../../components/Loader/Loader";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await movieApi.getMovieById(id);
        setMovie(data);
      } catch (error) {
        console.error("Error al cargar la película:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  if (loading) return <Loader />;
  if (!movie) return <p>No se encontró la película.</p>;

  return (
    <div className="movie-detail">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-info">
        <h1>{movie.title}</h1>
        <p><strong>Fecha de estreno:</strong> {movie.release_date}</p>
        <p><strong>Calificación:</strong> {movie.vote_average}</p>
        <p><strong>Resumen:</strong> {movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
