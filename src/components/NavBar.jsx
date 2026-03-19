import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <Link to="/">Los Cuentos del Alba</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <a href="#mundo">El Mundo</a>
        <a href="#heroes">Los Héroes</a>
        <Link to="/galeria">Galería</Link>
      </div>
    </nav>
  );
}

export default NavBar;
