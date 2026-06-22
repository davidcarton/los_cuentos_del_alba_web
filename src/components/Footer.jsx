import { Link } from "react-router-dom";
import { useSectionNav } from "../hooks/useSectionNav";
import "../styles/Footer.css";

function Footer() {
  const scrollToSection = useSectionNav();
  const año = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-marca">
            <span className="footer-titulo">Los Cuentos del Alba</span>
            <p className="footer-lema">
              “Incluso en las noches más oscuras, siempre existe la
              posibilidad de un nuevo amanecer.”
            </p>
          </div>

          <nav className="footer-nav" aria-label="Navegación del pie de página">
            <Link to="/">Inicio</Link>
            <button onClick={() => scrollToSection("mundo")}>El Mundo</button>
            <button onClick={() => scrollToSection("codice")}>
              El Códice
            </button>
            <button onClick={() => scrollToSection("heroes")}>
              Los Héroes
            </button>
            <button onClick={() => scrollToSection("vigilia")}>
              La Vigilia
            </button>
          </nav>
        </div>

        <div className="footer-rule" />

        <div className="footer-bottom">
          <span>© {año} Terra Oblita — Guardianes del Alba</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
