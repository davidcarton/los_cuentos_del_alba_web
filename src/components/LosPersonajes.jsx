import "../styles/LosPersonajes.css";
import { Link } from "react-router-dom";
import arkenorImg from "../assets/arkenor.jpg";
import meibelImg from "../assets/meibel.jpg";
import piroclesImg from "../assets/pirocles.jpg";

function LosPersonajes() {
  return (
    <section className="personajes">
      <div className="personajes-inner">
        <div className="personajes-header">
          <span className="section-tag">✦ Los Protagonistas ✦</span>
          <h2 className="section-title">Los Guardianes del Alba</h2>
          <p className="section-desc">
            Tres almas unidas por un destino, cada una con su propia historia
          </p>
        </div>

        <div className="personajes-grid">
          <Link to="/arkenor" className="personaje-card">
            <img src={arkenorImg} alt="Arkenor" />
            <div className="personaje-card-overlay">
              <span className="personaje-epiteto">El Guardián</span>
              <h3 className="personaje-nombre">Arkenor</h3>
              <p className="personaje-sobriquet">Escudo del Alba</p>
              <div className="personaje-rule"></div>
            </div>
          </Link>

          <Link to="/meibel" className="personaje-card">
            <img src={meibelImg} alt="Meibel" />
            <div className="personaje-card-overlay">
              <span className="personaje-epiteto">La Luminaria</span>
              <h3 className="personaje-nombre">Meibel</h3>
              <p className="personaje-sobriquet">Luz Indomita</p>
              <div className="personaje-rule"></div>
            </div>
          </Link>

          <Link to="/pirocles" className="personaje-card">
            <img src={piroclesImg} alt="Pirocles" />
            <div className="personaje-card-overlay">
              <span className="personaje-epiteto">El Eterno</span>
              <h3 className="personaje-nombre">Pirocles</h3>
              <p className="personaje-sobriquet">Llama Eterna</p>
              <div className="personaje-rule"></div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LosPersonajes;
