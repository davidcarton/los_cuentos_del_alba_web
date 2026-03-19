import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import arkenorImg from "../assets/arkenor.jpg";
import "../styles/PaginaPersonaje.css";

function Arkenor() {
  return (
    <div>
      <NavBar />
      <section className="pag-personaje">
        <div className="pag-personaje-inner">
          <div className="pag-personaje-imagen">
            <img src={arkenorImg} alt="Arkenor, Escudo del Alba" />
          </div>
          <div className="pag-personaje-texto">
            <span className="personaje-epiteto">El Guardián</span>
            <h1 className="pag-personaje-nombre">Arkenor</h1>
            <p className="personaje-sobriquet">Escudo del Alba</p>
            <div className="personaje-rule"></div>
            <p className="pag-personaje-bio">
              Arkenor, Escudo del Alba, es un caballero nacido entre los pueblos
              del Norte de Terra Oblita. Superviviente de la caída de Rígvorn,
              creció marcado por la pérdida y guiado por una promesa:
              convertirse en un escudo para los demás. Forjado en las llanuras
              de Vardhenn y acompañado por aliados inesperados, Arkenor
              representa la fortaleza del cuerpo y la voluntad de proteger
              incluso cuando la oscuridad parece inevitable. Su camino no busca
              gloria ni reconocimiento, sino hacer lo correcto cuando nadie más
              puede hacerlo.
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default Arkenor;
