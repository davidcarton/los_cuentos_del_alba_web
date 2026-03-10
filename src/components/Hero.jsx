import "../styles/Hero.css";
import Embers from "./Embers";

function Hero() {
  return (
    <section className="hero">
      <Embers />
      <div className="hero-ray" />
      <div className="hero-inner">
        <p className="hero-eyebrow">Una novela de fantasía épica</p>
        <h1 className="hero-title">
          Los Cuentos
          <br />
          del Alba
        </h1>
        <p className="hero-subtitle">Terra Oblita</p>
        <p className="hero-synopsis">
          En un mundo donde la oscuridad avanza en silencio, tres luces
          permanecen en pie.
        </p>
        <p className="hero-synopsis">
          Las leyendas hablan de almas que, en tiempos antiguos, se alzaron no
          por gloria, sino por aquello que aún merecía ser protegido. En las
          grietas de la noche, donde nacen las batallas invisibles, surge un eco
          que nunca muere: el Legado del Viento.
        </p>
        <p className="hero-synopsis">
          Los Cuentos del Alba reúne historias de valor, fragilidad, sacrificio
          y esperanza. Aquí, la historia no solo se cuenta: se vive, se siente,
          y guía el corazón hacia la luz que resiste incluso en la sombra más
          profunda.
        </p>
        <p className="hero-welcome">
          Bienvenido al comienzo de la historia.
          <br />
          Bienvenido al Alba.
        </p>
        <div className="hero-cta">
          <button className="btn btn-gold">Leer el Primer Capítulo</button>
          <button className="btn btn-ghost">Conocer el Mundo</button>
        </div>
      </div>
      <div className="scroll-hint">
        <span>Descender</span>
        <span>▾</span>
      </div>
    </section>
  );
}

export default Hero;
