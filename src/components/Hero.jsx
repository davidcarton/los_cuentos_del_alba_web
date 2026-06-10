import "../styles/Hero.css";
import heroImg from "../assets/hero.jpg";
import Embers from "./Embers";
import Reveal from "./Reveal";
import { useSectionNav } from "../hooks/useSectionNav";

function Hero() {
  const scrollToSection = useSectionNav();

  return (
    <section className="hero">
      <Embers />
      <div className="hero-ray" />
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-text">
            <Reveal as="p" className="hero-eyebrow" delay={0}>
              Una novela de fantasía épica
            </Reveal>
            <Reveal as="h1" className="hero-title" delay={100}>
              Los Cuentos
              <br />
              del Alba
            </Reveal>
            <Reveal as="p" className="hero-subtitle" delay={200}>
              Guardianes del Alba
            </Reveal>
            <Reveal as="p" className="hero-synopsis" delay={300}>
              En un mundo donde la oscuridad avanza en silencio, tres luces
              permanecen en pie.
            </Reveal>
            <Reveal as="p" className="hero-synopsis" delay={380}>
              Las leyendas hablan de almas que, en tiempos antiguos, se alzaron
              no por gloria, sino por aquello que aún merecía ser protegido. En
              las grietas de la noche, donde nacen las batallas invisibles,
              surge un eco que nunca muere: el Legado del Viento.
            </Reveal>
            <Reveal as="p" className="hero-synopsis" delay={460}>
              Los Cuentos del Alba reúne historias de valor, fragilidad,
              sacrificio y esperanza. Aquí, la historia no solo se cuenta: se
              vive, se siente, y guía el corazón hacia la luz que resiste
              incluso en la sombra más profunda.
            </Reveal>
            <Reveal className="hero-cta" delay={540}>
              <button
                className="btn btn-gold"
                onClick={() => scrollToSection("mundo")}
              >
                Descubre el Mundo
              </button>
              <button
                className="btn btn-ghost"
                onClick={() => scrollToSection("heroes")}
              >
                Conoce a los Guardianes
              </button>
            </Reveal>
          </div>
          <Reveal
            as="div"
            className="hero-image ornate-frame"
            delay={250}
          >
            <img src={heroImg} alt="Los Cuentos del Alba" />
          </Reveal>
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
