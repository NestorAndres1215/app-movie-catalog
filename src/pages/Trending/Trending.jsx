import { useEffect, useState } from "react";
import movieApi from "../../api/movieApi";
import MovieList from "../../components/MovieList/MovieList";
import { FaFire } from "react-icons/fa";

const Trending = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [loadingMovies, setLoadingMovies] = useState(true);
  const [loadingSeries, setLoadingSeries] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingMovies(true);
        const movieRes = await movieApi.getTrendingMovies();
        setMovies(movieRes.data.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      } finally {
        setLoadingMovies(false);
      }

      try {
        setLoadingSeries(true);
        const seriesRes = await movieApi.getTrendingSeries();
        setSeries(seriesRes.data.results);
      } catch (error) {
        console.error("Error fetching trending series:", error);
      } finally {
        setLoadingSeries(false);
      }
    };

    fetchData();
  }, []);

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
    <section className="trending-section py-5" style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <div className="container">

        {/* === SECCIÓN PELÍCULAS === */}
        <SectionHeader
          title="Películas en Tendencia"
          subtitle="Lo más visto en cines y streaming"
          icon={<FaFire size={32} />}
        />

        {loadingMovies ? (
          <SkeletonGrid />
        ) : movies.length === 0 ? (
          <div className="text-center py-4">
            <p className="text-muted">No hay películas en tendencia disponibles.</p>
          </div>
        ) : (
          <div className="mb-5">
            <MovieList movies={movies} />
          </div>
        )}

        {/* === SEPARADOR === */}
        <hr className="my-5" style={{ borderTop: "2px dashed #dee2e6" }} />

        {/* === SECCIÓN SERIES === */}
        <SectionHeader
          title="Series en Tendencia"
          subtitle="Las series que todos están viendo"
          icon={<FaFire size={32} />}
        />

        {loadingSeries ? (
          <SkeletonGrid />
        ) : series.length === 0 ? (
          <div className="text-center py-4">
            <p className="text-muted">No hay series en tendencia disponibles.</p>
          </div>
        ) : (
          <MovieList movies={series} isSeries />
        )}
      </div>
    </section>
  );
};

export default Trending;