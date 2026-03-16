import { useState, useEffect } from "react";
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
      <div className="navbar-logo">Los Cuentos del Alba</div>
      <div className="navbar-links">
        <a href="#">El Mundo</a>
        <a href="#">Los Héroes</a>
        <a href="#">Galería</a>
      </div>
    </nav>
  );
}
export default NavBar;
