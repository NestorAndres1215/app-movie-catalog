import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
// index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/sidebar.scss'; // Tu SCSS
const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navItems = [
    { to: "/", label: "Inicio" },
    { to: "/movies", label: "Películas" },
    { to: "/series", label: "Series" },
    { to: "/trending", label: "Tendencias" },
    { to: "/upcoming", label: "Estrenos" },
    { to: "/genres", label: "Géneros" },
    { to: "/actors", label: "Actores" },
    { to: "/favorites", label: "Favoritos" },
    { to: "/search", label: "Buscar" },
  ];

  return (
    <>
      {/* Botón móvil */}
      <button
        className="d-lg-none btn-sidebar-toggle"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2 className="logo">MovieCatalog</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`nav-link ${
                    location.pathname === item.to ? "active" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Overlay móvil */}
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Navbar;
