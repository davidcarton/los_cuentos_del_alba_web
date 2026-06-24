import "../styles/LosPersonajes.css";
import { Link } from "react-router-dom";
import arkenorImg from "../assets/arkenor.jpg";
import meibelImg from "../assets/meibel.jpg";
import piroclesImg from "../assets/pirocles.jpg";
import Reveal from "./Reveal";
import SectionTag from "./SectionTag";

function LosPersonajes() {
  return (
    <section className="personajes" id="heroes">
      <div className="personajes-inner">
        <Reveal as="div" className="personajes-header">
          <SectionTag>Los Protagonistas</SectionTag>
          <h2 className="section-title">Los Guardianes del Alba</h2>
          <p className="section-desc">
            Tres almas unidas por un destino, cada una con su propia historia
          </p>
        </Reveal>

        <div className="personajes-grid">
          <Reveal as={Link} to="/heroes/arkenor" className="personaje-card" delay={0}>
            <img src={arkenorImg} alt="Arkenor" />
            <div className="personaje-card-overlay">
              <span className="personaje-epiteto">El Guardián</span>
              <h3 className="personaje-nombre">Arkenor</h3>
              <p className="personaje-sobriquet">Escudo del Alba</p>
              <div className="personaje-rule"></div>
              <p className="personaje-teaser">
                El único que recuerda cómo ardió Rígvorn
              </p>
            </div>
          </Reveal>

          <Reveal as={Link} to="/heroes/meibel" className="personaje-card" delay={120}>
            <img src={meibelImg} alt="Meibel" />
            <div className="personaje-card-overlay">
              <span className="personaje-epiteto">La Luminaria</span>
              <h3 className="personaje-nombre">Meibel</h3>
              <p className="personaje-sobriquet">Luz Indómita</p>
              <div className="personaje-rule"></div>
              <p className="personaje-teaser">
                Abandonó Aeloria por un camino que no estaba escrito
              </p>
            </div>
          </Reveal>

          <Reveal as={Link} to="/heroes/pirocles" className="personaje-card" delay={240}>
            <img src={piroclesImg} alt="Pirocles" />
            <div className="personaje-card-overlay">
              <span className="personaje-epiteto">El Eterno</span>
              <h3 className="personaje-nombre">Pirocles</h3>
              <p className="personaje-sobriquet">Llama Eterna</p>
              <div className="personaje-rule"></div>
              <p className="personaje-teaser">
                Ante él, hasta los Lumien inclinan la cabeza sin saber por qué
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default LosPersonajes;
