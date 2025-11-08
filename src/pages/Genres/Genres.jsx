import { useEffect, useState } from "react";
import movieApi from "../../api/movieApi";
import MovieList from "../../components/MovieList/MovieList";
import { FaTags } from "react-icons/fa";

const Genres = () => {
  const [genres, setGenres] = useState([]);
  const [selected, setSelected] = useState(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await movieApi.getGenres();
        setGenres(res.data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };
    fetchGenres();
  }, []);

  const loadMovies = async (genreId) => {
    setSelected(genreId);
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`,
        {
          headers: { Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}` }
        }
      );
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies by genre:", error);
    } finally {
      setLoading(false);
    }
  };

  const SectionHeader = ({ title, subtitle, icon }) => (
    <div className="text-center mb-5">
      <div
        className="d-inline-flex align-items-center justify-content-center rounded-circle shadow-sm mx-auto mb-3"
        style={{
          width: "70px",
          height: "70px",
          backgroundColor: "#1a2b4e",
          color: "#ffffff",
          boxShadow: "0 4px 12px rgba(26, 43, 78, 0.2)",
        }}
      >
        {icon}
      </div>
      <h1 className="display-5 fw-bold" style={{ color: "#1a2b4e" }}>
        {title}
      </h1>
      <p className="lead text-muted">{subtitle}</p>
      <div
        className="mx-auto"
        style={{ width: "80px", height: "4px", backgroundColor: "#1a2b4e", borderRadius: "2px" }}
      ></div>
    </div>
  );

  const SkeletonGrid = () => (
    <div className="row g-4">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="col-6 col-md-4 col-lg-3">
          <div className="card h-100 border-0 shadow-sm">
            <div className="placeholder-glow">
              <div className="placeholder col-12" style={{ height: "280px" }}></div>
            </div>
            <div className="card-body">
              <div className="placeholder-glow">
                <div className="placeholder col-8 mb-2"></div>
                <div className="placeholder col-6"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="genres-page py-5" style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <div className="container">
        <SectionHeader
          title="Géneros"
          subtitle="Explora películas por categoría"
          icon={<FaTags size={32} />}
        />

        <div className="mb-4 d-flex flex-wrap justify-content-center gap-2">
          {genres.map((g) => (
            <button
              key={g.id}
              onClick={() => loadMovies(g.id)}
              className="btn"
              style={{
                backgroundColor: selected === g.id ? "#1a2b4e" : "#dee2e6",
                color: selected === g.id ? "#ffffff" : "#1a2b4e",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "20px",
                transition: "0.3s",
              }}
            >
              {g.name}
            </button>
          ))}
        </div>

        {loading ? (
          <SkeletonGrid />
        ) : selected ? (
          movies.length > 0 ? (
            <MovieList movies={movies} />
          ) : (
            <div className="text-center py-4">
              <p className="text-muted">No hay películas para este género.</p>
            </div>
          )
        ) : null}
      </div>
    </section>
  );
};

export default Genres;
