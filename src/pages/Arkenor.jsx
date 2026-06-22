import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import GoldRule from "../components/GoldRule";
import Reveal from "../components/Reveal";
import Footer from "../components/Footer";
import arkenorImg from "../assets/arkenor.jpg";
import "../styles/PaginaPersonaje.css";

function Arkenor() {
  return (
    <div>
      <NavBar />
      <section className="pag-personaje">
        <div className="pag-personaje-inner">
          <Reveal as="div" className="pag-personaje-imagen ornate-frame">
            <img src={arkenorImg} alt="Arkenor, Escudo del Alba" />
          </Reveal>
          <Reveal as="div" className="pag-personaje-texto" delay={150}>
            <span className="personaje-epiteto">El Guardián</span>
            <h1 className="pag-personaje-nombre">Arkenor</h1>
            <p className="personaje-sobriquet">Escudo del Alba</p>
            <GoldRule compact />
            <p className="personaje-datos">Norte · Vardhenn · Espada del Alba</p>
            <p className="pag-personaje-bio">
              Arkenor es un caballero nacido entre los pueblos del Norte de
              Terra Oblita. Superviviente de la caída de Rígvorn, creció
              marcado por la pérdida y guiado por una promesa: convertirse en
              un escudo para los demás. Forjado en las llanuras de Vardhenn,
              donde los jinetes vierten la primera parte de cada copa por los
              que ya no están, Arkenor representa la fortaleza del cuerpo y la
              voluntad de proteger incluso cuando la oscuridad parece
              inevitable. Su camino no busca gloria ni reconocimiento, sino
              hacer lo correcto cuando nadie más puede hacerlo. Dicen que
              lleva consigo un arma que no fue forjada como las demás, aunque
              pocos saben de dónde nació de verdad.
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

export default Arkenor;
