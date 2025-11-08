import { useEffect, useState } from "react";
import movieApi from "../../api/movieApi";
import MovieList from "../../components/MovieList/MovieList";
import { FaCalendarAlt } from "react-icons/fa";

const Upcoming = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUpcoming = async () => {
      try {
        setLoading(true);
        const res = await movieApi.getUpcoming();
        setMovies(res.data.results);
      } catch (error) {
        console.error("Error fetching upcoming movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUpcoming();
  }, []);

  return (
    <section className="upcoming-section py-5" style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <div className="container">

        {/* === Header con icono y título === */}
        <div className="text-center mb-5">
          <div
            className="d-inline-flex align-items-center justify-content-center rounded-circle shadow-sm"
            style={{
              width: "70px",
              height: "70px",
              backgroundColor: "#1a2b4e",  // Azul marino
              color: "#ffffff",            // Icono blanco
            }}
          >
            <FaCalendarAlt size={32} />
          </div>
          <h1 className="display-5 fw-bold" style={{ color: "#1a2b4e" }}>
            Próximos Estrenos
          </h1>
          <p className="lead text-muted">
            Descubre las películas que llegarán pronto a la pantalla grande
          </p>
          <div className="border-bottom border-primary mx-auto" style={{ width: "80px", height: "4px", backgroundColor: "#1a2b4e" }}></div>
        </div>

        {/* === Loading con Skeleton === */}
        {loading ? (
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
        ) : movies.length === 0 ? (
          <div className="text-center py-5">
            <div className="bg-light rounded-3 p-5 mx-auto" style={{ maxWidth: "400px" }}>
              <FaCalendarAlt size={48} className="text-muted mb-3" />
              <p className="text-muted fs-5">No hay estrenos próximos disponibles en este momento.</p>
            </div>
          </div>
        ) : (
          /* === Lista de películas (MovieList sin tocar) === */
          <div className="mt-4">
            <MovieList movies={movies} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Upcoming;