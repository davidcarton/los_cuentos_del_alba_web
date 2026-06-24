import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
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
            <Link to="/mundo">El Mundo</Link>
            <Link to="/codice">El Códice</Link>
            <Link to="/heroes">Los Héroes</Link>
            <Link to="/vigilia">La Vigilia</Link>
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
