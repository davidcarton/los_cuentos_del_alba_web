import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import GoldRule from "../components/GoldRule";
import Reveal from "../components/Reveal";
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
            <p className="pag-personaje-bio">
              Pirocles, Llama Eterna, es un misterioso viajero cuyo origen nadie
              conoce con certeza. Portador de una antigua magia de fuego y
              espíritu, aparece en los momentos en que la oscuridad amenaza con
              imponerse. A veces se muestra como un anciano cercano y algo
              distraído; otras, como una presencia imponente que las criaturas
              de la Sombra no se atreven a enfrentar. Más que un guerrero,
              Pirocles es un guía: una llama que recuerda a los pueblos de Terra
              Oblita que incluso en la noche más profunda la luz nunca
              desaparece del todo.
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
    </div>
  );
}

export default Pirocles;
