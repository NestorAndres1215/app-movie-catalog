import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h2>MovieCatalog</h2>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/favorites">Favoritos</Link></li>
        <li><Link to="/search">Buscar</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
