import "../styles/ElMundo.css";
import elmundoImg from "../assets/elmundo.jpg";
import Reveal from "./Reveal";

function ElMundo() {
  return (
    <section className="elmundo" id="mundo">
      <div className="elmundo-inner">
        <div className="elmundo-content">
          <Reveal as="div" className="elmundo-imagen ornate-frame">
            <img src={elmundoImg} alt="Terra Oblita" />
          </Reveal>
          <Reveal as="div" className="elmundo-texto" delay={150}>
            <div className="elmundo-header">
              <span className="section-tag">✦ El Mundo ✦</span>
              <h2 className="section-title">Terra Oblita</h2>
            </div>
            <p className="section-desc">
              Terra Oblita es un mundo de fantasía donde la luz y la oscuridad
              mantienen una lucha constante. Creado por Aurion, fue concebido
              como una tierra perfecta, pero la aparición de la Sombra trajo
              corrupción y conflicto. Aun así, entre ruinas, reinos y antiguos
              caminos, siguen alzándose héroes, pueblos y guardianes que
              defienden la esperanza. Es el escenario principal de Los Cuentos
              del Alba, un universo de leyendas, sacrificio y luz frente a la
              oscuridad.
            </p>
            <div className="elmundo-stats">
              <div className="elmundo-stat">
                <span className="elmundo-stat-num">VII</span>
                <span className="elmundo-stat-label">Aurelin, luces primordiales</span>
              </div>
              <div className="elmundo-stat">
                <span className="elmundo-stat-num">II</span>
                <span className="elmundo-stat-label">Razas antiguas: Lumien y Sacrum</span>
              </div>
              <div className="elmundo-stat">
                <span className="elmundo-stat-num">∞</span>
                <span className="elmundo-stat-label">Pueblos del Norte, Centro y Sur</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default ElMundo;
