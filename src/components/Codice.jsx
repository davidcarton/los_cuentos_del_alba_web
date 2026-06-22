import { useState } from "react";
import "../styles/Codice.css";
import Reveal from "./Reveal";
import { useSpotlight } from "../hooks/useSpotlight";

const CAPITULOS = [
  {
    id: "luz",
    nombre: "La Luz",
    runa: "✦",
    entradas: [
      {
        titulo: "Aurion",
        epigrafe: "El Creador",
        texto:
          "Antes de los mares, las montañas y los pueblos, existía Aurion. No un dios entre dioses, sino el origen mismo de cuanto es bueno, bello y verdadero en Terra Oblita.",
      },
      {
        titulo: "Los Siete Aurelin",
        epigrafe: "Luces primordiales",
        texto:
          "Liriën, Serad, Vaelor, Elarin, Anarith y Caelia reflejan distintos aspectos de la Luz: misericordia, coraje, verdad, sabiduría, esperanza, creación. No se les ve. Se les siente.",
        runas: ["Liriën", "Serad", "Vaelor", "Elarin", "Anarith", "Caelia"],
      },
      {
        titulo: "Los Ilumir",
        epigrafe: "Guardianes menores",
        texto:
          "Descansan de día, despiertan al atardecer y velan durante la noche. Solo los pueblos donde la Luz aún se siente con fuerza llegan a percibirlos.",
      },
    ],
  },
  {
    id: "sombra",
    nombre: "La Sombra",
    runa: "◈",
    entradas: [
      {
        titulo: "Umbren",
        epigrafe: "La Caída",
        texto:
          "Era el Anhelo. Amó el mundo con una fuerza que no se distinguía de la devoción, hasta que deseó ser la fuente en lugar del río. No fue un instante. Fue un proceso lento, como se tuerce todo lo que tarda en romperse.",
      },
      {
        titulo: "El Umbral",
        epigrafe: "El hilo que sostiene el mundo",
        texto:
          "Une a Aurion con todo lo que vive: hombres, razas antiguas, animales, bosques, ríos. Cuando se daña, el daño se extiende — y no siempre del todo se cura.",
      },
      {
        titulo: "Las Grietas",
        epigrafe: "Heridas abiertas",
        texto:
          "No las abre la Sombra. Las abren la codicia, la desesperación, la ignorancia de quienes ella engaña. Cuanto más antigua es una grieta, más organizada se vuelve la oscuridad a su alrededor.",
      },
    ],
  },
  {
    id: "pueblos",
    nombre: "Los Pueblos",
    runa: "⚔",
    entradas: [
      {
        titulo: "El Norte",
        epigrafe: "Rígvorn · Vardhenn · Braegard · Kuldren",
        texto:
          "Inviernos interminables y lealtad sin adornos. La instrucción no se explica: se muestra. Cada hogar enciende de noche una llama junto a su puerta, no para que la vean — para que sea lo que hay que hacer.",
      },
      {
        titulo: "Las Tierras del Centro",
        epigrafe: "El cruce de dos mundos",
        texto:
          "Aceite del Sur y sal del Norte en la misma alacena. Territorios de paso donde nadie recuerda ya de dónde viene cada costumbre, solo que ambas pertenecen.",
      },
      {
        titulo: "El Sur — Kaldareth",
        epigrafe: "La ciudad amurallada",
        texto:
          "Corazón del gran reino del Sur. Sus murallas no son solo defensa: son identidad, permanencia, orden frente a un mundo que se resquebraja.",
      },
    ],
  },
  {
    id: "razas",
    nombre: "Razas Antiguas",
    runa: "❖",
    entradas: [
      {
        titulo: "Los Lumien",
        epigrafe: "Piel plateada, ciudades sin nombre en ningún mapa",
        texto:
          "Viven mientras su propósito no se haya cumplido. Cuatro caminos los distinguen — Luminaria, Claravida, Escuderos de Bruma, Guardaclaros — pero todos comparten la misma reverencia silenciosa por el atardecer.",
      },
      {
        titulo: "Los Sacrum",
        epigrafe: "El Llamado",
        texto:
          "No eligen su camino. Son llamados a él, a veces en la infancia, a veces nunca. Quien acepta plenamente su llamado recibe un bastón — no como autoridad, sino como responsabilidad tallada en madera.",
      },
      {
        titulo: "El Umbral y sus guardianes",
        epigrafe: "Cuatro Sendas",
        texto:
          "Guardianes del Umbral, Custodios del Eco, Vigías de Ceniza, Voces del Llamado. Cada Senda no se elige. Se descubre, como quien por fin reconoce su propio nombre.",
      },
    ],
  },
];

function EntradaCard({ entrada }) {
  const { ref, onMouseMove } = useSpotlight();

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className="codice-entrada spotlight-card"
    >
      <span className="codice-entrada-epigrafe">{entrada.epigrafe}</span>
      <h3 className="codice-entrada-titulo">{entrada.titulo}</h3>
      <p className="codice-entrada-texto">{entrada.texto}</p>
      {entrada.runas && (
        <ul className="codice-runas">
          {entrada.runas.map((runa) => (
            <li key={runa}>{runa}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Codice() {
  const [activo, setActivo] = useState(CAPITULOS[0].id);
  const capitulo = CAPITULOS.find((c) => c.id === activo);

  return (
    <section className="codice" id="codice">
      <div className="codice-inner">
        <Reveal as="div" className="codice-header">
          <span className="section-tag">✦ El Códice ✦</span>
          <h2 className="section-title">Códice de Terra Oblita</h2>
          <p className="section-desc">
            Fragmentos del canon que se transmite entre quienes aún recuerdan
            cómo era el mundo antes de que la Sombra aprendiera a hablar.
          </p>
        </Reveal>

        <Reveal as="div" className="codice-tabs" delay={100}>
          {CAPITULOS.map((cap) => (
            <button
              key={cap.id}
              className={`codice-tab ${activo === cap.id ? "activo" : ""}`}
              onClick={() => setActivo(cap.id)}
              aria-pressed={activo === cap.id}
            >
              <span className="codice-tab-runa">{cap.runa}</span>
              {cap.nombre}
            </button>
          ))}
        </Reveal>

        <div className="codice-grid">
          {capitulo.entradas.map((entrada, i) => (
            <Reveal as="div" key={`${activo}-${entrada.titulo}`} delay={i * 90}>
              <EntradaCard entrada={entrada} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Codice;
