import { useFavorites } from "../../context/FavoritesContext";
import MovieList from "../../components/MovieList/MovieList";
import { FaHeart } from "react-icons/fa";

const Favorites = () => {
  const { favorites } = useFavorites();

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

  return (
    <section className="favorites-page py-5" style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <div className="container">
        <SectionHeader
          title="Mis Favoritos"
          subtitle="Tus películas y series guardadas"
          icon={<FaHeart size={32} />}
        />

        {favorites.length === 0 ? (
          <div className="text-center py-4">
            <p className="text-muted">No tienes favoritos aún.</p>
          </div>
        ) : (
          <MovieList movies={favorites} />
        )}
      </div>
    </section>
  );
};

export default Favorites;
