import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSectionNav } from "../hooks/useSectionNav";
import "../styles/NavBar.css";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToSection = useSectionNav();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToSection = (id) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Los Cuentos del Alba
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <button onClick={() => goToSection("mundo")}>El Mundo</button>
        <button onClick={() => goToSection("codice")}>El Códice</button>
        <button onClick={() => goToSection("heroes")}>Los Héroes</button>
        <button className="navbar-cta" onClick={() => goToSection("vigilia")}>
          Únete al Alba
        </button>
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
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Inicio
          </Link>
          <button onClick={() => goToSection("mundo")}>El Mundo</button>
          <button onClick={() => goToSection("codice")}>El Códice</button>
          <button onClick={() => goToSection("heroes")}>Los Héroes</button>
          <button className="navbar-cta" onClick={() => goToSection("vigilia")}>
            Únete al Alba
          </button>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
