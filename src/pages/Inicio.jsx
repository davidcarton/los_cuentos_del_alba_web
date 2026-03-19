import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import ElMundo from "../components/ElMundo";
import LosPersonajes from "../components/LosPersonajes";
import "../styles/GoldRule.css";

function Inicio() {
  return (
    <div>
      <NavBar />
      <Hero />
      <ElMundo />
      <LosPersonajes />
    </div>
  );
}

export default Inicio;
