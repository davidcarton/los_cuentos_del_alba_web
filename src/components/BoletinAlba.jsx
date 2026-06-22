import { useState } from "react";
import "../styles/BoletinAlba.css";
import Reveal from "./Reveal";
import SectionTag from "./SectionTag";
import { useSpotlight } from "../hooks/useSpotlight";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function BoletinAlba() {
  const [email, setEmail] = useState("");
  const [estado, setEstado] = useState("idle"); // idle | cargando | exito | error
  const [mensaje, setMensaje] = useState("");
  const { ref, onMouseMove } = useSpotlight();

  const enviar = (e) => {
    e.preventDefault();

    if (!EMAIL_RE.test(email.trim())) {
      setEstado("error");
      setMensaje("Ese correo no parece completo. Revísalo y vuelve a intentarlo.");
      return;
    }

    setEstado("cargando");

    // TODO: conectar a un proveedor real (Formspree/Mailchimp/Brevo) antes de publicar.
    window.setTimeout(() => {
      setEstado("exito");
      setMensaje("Tu nombre queda escrito en la vigilia. Nos vemos en el Alba.");
    }, 700);
  };

  return (
    <section className="boletin" id="vigilia">
      <Reveal as="div" className="boletin-reveal">
        <div
          ref={ref}
          onMouseMove={onMouseMove}
          className="boletin-card spotlight-card"
        >
          <SectionTag>La Vigilia</SectionTag>
          <h2 className="boletin-titulo">
            Cuando llegue el Alba,
            <br />
            lo sabrás primero
          </h2>
          <p className="boletin-desc">
            Terra Oblita ya tiene quien la vigile. Únete a quienes esperan al
            otro lado del umbral — sin ruido, sin prisa. Solo la primera luz,
            cuando llegue.
          </p>

          {estado === "exito" ? (
            <p className="boletin-mensaje exito" role="status">
              {mensaje}
            </p>
          ) : (
            <form className="boletin-form" onSubmit={enviar} noValidate>
              <input
                type="email"
                className="boletin-input"
                placeholder="tu-correo@dominio.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (estado === "error") setEstado("idle");
                }}
                aria-label="Correo electrónico"
                aria-invalid={estado === "error"}
                disabled={estado === "cargando"}
              />
              <button
                type="submit"
                className="btn btn-gold"
                disabled={estado === "cargando"}
              >
                {estado === "cargando" ? "Encendiendo…" : "Sumarme a la vigilia"}
              </button>
            </form>
          )}

          {estado === "error" && (
            <p className="boletin-mensaje error" role="alert">
              {mensaje}
            </p>
          )}

          <p className="boletin-privacidad">
            Solo se usará para avisarte del Alba. Nunca se comparte, nunca se
            vende.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

export default BoletinAlba;
