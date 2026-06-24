import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          Los Cuentos del Alba
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/mundo">El Mundo</Link>
        <Link to="/codice">El Códice</Link>
        <Link to="/heroes">Los Héroes</Link>
        <Link to="/vigilia" className="navbar-cta">
          Únete al Alba
        </Link>
      </div>
      <button
        className={`navbar-burger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Abrir menú"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {menuOpen && (
        <div className="navbar-mobile-menu">
          <Link to="/" onClick={closeMenu}>
            Inicio
          </Link>
          <Link to="/mundo" onClick={closeMenu}>
            El Mundo
          </Link>
          <Link to="/codice" onClick={closeMenu}>
            El Códice
          </Link>
          <Link to="/heroes" onClick={closeMenu}>
            Los Héroes
          </Link>
          <Link to="/vigilia" className="navbar-cta" onClick={closeMenu}>
            Únete al Alba
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
