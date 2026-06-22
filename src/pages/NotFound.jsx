import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import GoldRule from "../components/GoldRule";
import Reveal from "../components/Reveal";
import SectionTag from "../components/SectionTag";
import "../styles/NotFound.css";

function NotFound() {
  return (
    <div>
      <NavBar />
      <section className="not-found">
        <Reveal as="div" className="not-found-inner">
          <SectionTag>Sendero perdido</SectionTag>
          <h1 className="not-found-titulo">La bruma cubre este camino</h1>
          <GoldRule compact />
          <p className="not-found-texto">
            No hay registro de este lugar en el Códice de Terra Oblita. Quizá
            la Sombra borró la señal, o quizá nunca existió un sendero aquí.
          </p>
          <Link to="/" className="btn btn-gold">
            ← Volver al Alba
          </Link>
        </Reveal>
      </section>
    </div>
  );
}

export default NotFound;
