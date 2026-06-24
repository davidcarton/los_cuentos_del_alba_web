import { Link } from "react-router-dom";
import GoldRule from "../components/GoldRule";
import Reveal from "../components/Reveal";
import meibelImg from "../assets/meibel.jpg";
import "../styles/PaginaPersonaje.css";

function Meibel() {
  return (
    <section className="pag-personaje">
      <div className="pag-personaje-inner">
        <Reveal as="div" className="pag-personaje-imagen ornate-frame">
          <img src={meibelImg} alt="Meibel, Luz Indómita" />
        </Reveal>
        <Reveal as="div" className="pag-personaje-texto" delay={150}>
          <span className="personaje-epiteto">La Luminaria</span>
          <h1 className="pag-personaje-nombre">Meibel</h1>
          <p className="personaje-sobriquet">Luz Indómita</p>
          <GoldRule compact />
          <p className="personaje-datos">Lumien · Aeloria · Luminaria</p>
          <p className="pag-personaje-bio">
            Meibel pertenece a los Lumien, una de las razas antiguas de
            Terra Oblita, cuyas ciudades viven ocultas en ningún mapa
            conocido. Desciende de Leibel, cofundadora de los Guardaclaros y
            la primera persona conocida capaz de seguir las cuatro Sendas
            Lumien a la vez. A diferencia de muchos de los suyos, la fuerza
            de Meibel no reside en el brillo, sino en la profundidad: sana
            despacio, pero sana hondo. Elegida Luminaria, su don es sostener
            la luz junto a la oscuridad hasta que esta no sabe qué hacer.
            Abandonó Aeloria para caminar fuera de los territorios Lumien,
            algo que pocos de su pueblo llegan a hacer.
          </p>
          <Link
            to="/heroes"
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
  );
}

export default Meibel;
