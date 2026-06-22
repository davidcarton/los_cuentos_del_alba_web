import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import GoldRule from "../components/GoldRule";
import Reveal from "../components/Reveal";
import Footer from "../components/Footer";
import piroclesImg from "../assets/pirocles.jpg";
import "../styles/PaginaPersonaje.css";

function Pirocles() {
  return (
    <div>
      <NavBar />
      <section className="pag-personaje">
        <div className="pag-personaje-inner">
          <Reveal as="div" className="pag-personaje-imagen ornate-frame">
            <img src={piroclesImg} alt="Pirocles, Llama Eterna" />
          </Reveal>
          <Reveal as="div" className="pag-personaje-texto" delay={150}>
            <span className="personaje-epiteto">El Eterno</span>
            <h1 className="pag-personaje-nombre">Pirocles</h1>
            <p className="personaje-sobriquet">Llama Eterna</p>
            <GoldRule compact />
            <p className="personaje-datos">
              El Caminante sin Tiempo · Llama del Bastón
            </p>
            <p className="pag-personaje-bio">
              Pirocles es un misterioso viajero cuyo origen nadie conoce con
              certeza. En los archivos de Aeloria se le nombra el Caminante
              sin Tiempo, y los Lumien inclinan la cabeza ante él sin saber
              explicar por qué. Portador de una llama inextinguible que arde
              en su bastón, aparece en los momentos en que la oscuridad
              amenaza con imponerse. A veces se muestra como un anciano
              cercano y algo distraído, con un humor que desarma; otras, como
              una presencia ante la que incluso los Shardun retroceden. Más
              que un guerrero, Pirocles es un guía: una llama que recuerda a
              los pueblos de Terra Oblita que incluso en la noche más
              profunda, la luz nunca desaparece del todo.
            </p>
            <Link
              to="/"
              className="btn btn-gold"
              style={{
                display: "inline-block",
                marginTop: "2rem",
                textDecoration: "none",
              }}
            >
              ← Volver
            </Link>
          </Reveal>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Pirocles;
