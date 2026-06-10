import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import GoldRule from "../components/GoldRule";
import Reveal from "../components/Reveal";
import meibelImg from "../assets/meibel.jpg";
import "../styles/PaginaPersonaje.css";

function Meibel() {
  return (
    <div>
      <NavBar />
      <section className="pag-personaje">
        <div className="pag-personaje-inner">
          <Reveal as="div" className="pag-personaje-imagen ornate-frame">
            <img src={meibelImg} alt="Meibel, Luz Indomita" />
          </Reveal>
          <Reveal as="div" className="pag-personaje-texto" delay={150}>
            <span className="personaje-epiteto">La Luminaria</span>
            <h1 className="pag-personaje-nombre">Meibel</h1>
            <p className="personaje-sobriquet">Luz Indomita</p>
            <GoldRule compact />
            <p className="pag-personaje-bio">
              Meibel, Luz del Alma, pertenece al pueblo de los Lumien, seres
              nacidos de la luz que Aurion dejó en Terra Oblita. A diferencia de
              muchos de los suyos, su fuerza no reside en el brillo de su poder,
              sino en la profundidad de su compasión. Elegida como Luminaria, su
              don es sanar, proteger y mantener viva la esperanza incluso cuando
              la oscuridad se extiende. Su destino cambiará cuando sus pasos se
              crucen con los de Arkenor, descubriendo que la verdadera luz no
              solo cura… también guía.
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

export default Meibel;
