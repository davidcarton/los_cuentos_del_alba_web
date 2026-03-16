import arkenorImg from "../assets/arkenor.jpg";
import meibelImg from "../assets/meibel.jpg";
import piroclesImg from "../assets/pirocles.jpg";
import "../styles/LosPersonajes.css";

function LosPersonajes() {
  return (
    <section className="personajes">
      <div className="personajes-inner">
        <div className="personajes-header">
          <span className="section-tag">✦ Los Protagonistas ✦</span>
          <h2 className="section-title">Los Guardianes del Alba</h2>
          <p className="section-desc">
            Tres almas unidas por un destino, cada una con su propia historia.
          </p>
        </div>

        <div className="personaje-row">
          <div className="personaje-text">
            <span className="personaje-epiteto">El Hombre del Norte</span>
            <h3 className="personaje-nombre">Arkenor</h3>
            <p className="personaje-sobriquet">Escudo del Alba</p>
            <div className="personaje-rule"></div>
            <p className="personaje-bio">
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
          </div>
          <div className="personaje-imagen">
            <img src={arkenorImg} alt="Arkenor, Escudo del Alba" />
          </div>
        </div>

        <div className="personaje-row personaje-row-inverso">
          <div className="personaje-imagen">
            <img src={meibelImg} alt="Meibel, Luz Indomita" />
          </div>
          <div className="personaje-text">
            <span className="personaje-epiteto">La Lumien</span>
            <h3 className="personaje-nombre">Meibel</h3>
            <p className="personaje-sobriquet">Luz Indomita</p>
            <div className="personaje-rule"></div>
            <p className="personaje-bio">
              Meibel, Luz del Indomita, pertenece al pueblo de los Lumien, seres
              nacidos de la luz que Aurion dejó en Terra Oblita. A diferencia de
              muchos de los suyos, su fuerza no reside en el brillo de su poder,
              sino en la profundidad de su compasión. Elegida como Luminaria, su
              don es sanar, proteger y mantener viva la esperanza incluso cuando
              la oscuridad se extiende. Su destino cambiará cuando sus pasos se
              crucen con los de Arkenor, descubriendo que la verdadera luz no
              solo cura… también guía.
            </p>
          </div>
        </div>

        <div className="personaje-row">
          <div className="personaje-text">
            <span className="personaje-epiteto">El Sacrum</span>
            <h3 className="personaje-nombre">Pirocles</h3>
            <p className="personaje-sobriquet">Llama Eterna</p>
            <div className="personaje-rule"></div>
            <p className="personaje-bio">
              Pirocles, Llama Eterna, es un misterioso viajero cuyo origen nadie
              conoce con certeza. Portador de una antigua magia de fuego y
              espíritu, aparece en los momentos en que la oscuridad amenaza con
              imponerse. A veces se muestra como un anciano cercano y algo
              distraído; otras, como una presencia imponente que las criaturas
              de la Sombra no se atreven a enfrentar. Más que un guerrero,
              Pirocles es un guía: una llama que recuerda a los pueblos de Terra
              Oblita que incluso en la noche más profunda la luz nunca
              desaparece del todo.
            </p>
          </div>
          <div className="personaje-imagen">
            <img src={piroclesImg} alt="Pirocles, Llama Eterna" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LosPersonajes;
