import "../styles/ElMundo.css";
import elmundoImg from "../assets/elmundo.jpg";

function ElMundo() {
  return (
    <section className="elmundo">
      <div className="elmundo-inner">
        <div className="elmundo-content">
          <div className="elmundo-imagen">
            <img src={elmundoImg} alt="Terra Oblita" />
          </div>
          <div className="elmundo-texto">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default ElMundo;
