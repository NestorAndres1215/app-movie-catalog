import { useEffect, useState } from "react";
import movieApi from "../../api/movieApi";
import { FaUser } from "react-icons/fa";

const Actors = () => {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const actorsPerPage = 12;

  const fetchActors = async (pageNumber = 1) => {
    try {
      setLoading(true);
      const all = await movieApi.getAllPopularActors(24); // 24 actores
      const start = (pageNumber - 1) * actorsPerPage;
      const end = pageNumber * actorsPerPage;
      setActors(all.slice(start, end));
    } catch (error) {
      console.error("Error fetching actors:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActors(page);
  }, [page]);

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
      {[...Array(8)].map((_, i) => (
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

  const Pagination = () => {
    const totalPages = Math.ceil(199999 / actorsPerPage);

    return (
      <div className="d-flex justify-content-center align-items-center gap-2 my-4">
        <button
          className="btn"
          style={{ backgroundColor: "#1a2b4e", color: "#fff", border: "none" }}
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Anterior
        </button>
        <span>{page} / {totalPages}</span>
        <button
          className="btn"
          style={{ backgroundColor: "#1a2b4e", color: "#fff", border: "none" }}
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Siguiente
        </button>
      </div>
    );
  };

  return (
    <section className="actors-page py-5" style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <div className="container">
        <SectionHeader
          title="Actores Populares"
          subtitle="Los actores más reconocidos"
          icon={<FaUser size={32} />}
        />

        {loading ? (
          <SkeletonGrid />
        ) : actors.length === 0 ? (
          <div className="text-center py-4">
            <p className="text-muted">No hay actores disponibles.</p>
          </div>
        ) : (
          <>
            <div className="row g-4">
              {actors.map((actor) => (
                <div key={actor.id} className="col-6 col-md-4 col-lg-3">
                  <div className="card h-100 border-0 shadow-sm text-center">
                    <img
                      src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                      alt={actor.name}
                      className="card-img-top rounded"
                      style={{ height: "280px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <p className="mb-0 fw-bold">{actor.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Pagination />
          </>
        )}
      </div>
    </section>
  );
};

export default Actors;
