import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/sidebar.scss';

import { 
  FaHome, FaFilm, FaTv, FaFire, FaCalendarAlt, 
  FaTags, FaUserFriends, FaHeart, FaSearch 
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navItems = [
    { to: "/", label: "Inicio", icon: <FaHome /> },
    { to: "/movies", label: "Películas", icon: <FaFilm /> },
    { to: "/series", label: "Series", icon: <FaTv /> },
    { to: "/trending", label: "Tendencias", icon: <FaFire /> },
    { to: "/upcoming", label: "Estrenos", icon: <FaCalendarAlt /> },
    { to: "/genres", label: "Géneros", icon: <FaTags /> },
    { to: "/actors", label: "Actores", icon: <FaUserFriends /> },
    { to: "/favorites", label: "Favoritos", icon: <FaHeart /> },
    { to: "/search", label: "Buscar", icon: <FaSearch /> },
  ];

  return (
    <>
      {/* === SIDEBAR VERTICAL (Desktop) === */}
      <aside className={`sidebar d-none d-lg-block ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2 className="logo">MovieCatalog</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`nav-link ${location.pathname === item.to ? "active" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* === NAVBAR HORIZONTAL (Móvil) === */}
      <nav className="mobile-navbar d-lg-none">
        <ul className="mobile-nav-list">
          {navItems.slice(0, 5).map((item) => ( // Solo 5 íconos en móvil
            <li key={item.to}>
              <Link
                to={item.to}
                className={`mobile-nav-link ${location.pathname === item.to ? "active" : ""}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* === BOTÓN HAMBURGUESA (Solo si hay más ítems) === */}
      {navItems.length > 6 && (
        <>


          {/* Sidebar móvil como menú desplegable */}
          <aside className={`sidebar-mobile d-lg-none ${isOpen ? "open" : ""}`}>
            <div className="sidebar-header">
              <h2 className="logo">MovieCatalog</h2>
            </div>
            <nav className="sidebar-nav">
              <ul>
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className={`nav-link ${location.pathname === item.to ? "active" : ""}`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="nav-icon">{item.icon}</span>
                      <span className="nav-label">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

     
        </>
      )}
    </>
  );
};

export default Navbar;