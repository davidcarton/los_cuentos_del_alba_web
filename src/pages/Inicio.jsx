import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import ElMundo from "../components/ElMundo";
import LosPersonajes from "../components/LosPersonajes";
import GoldRule from "../components/GoldRule";

function Inicio() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const targetId = location.state?.scrollTo;
    if (!targetId) return;

    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    navigate(".", { replace: true, state: {} });
  }, [location.state, navigate]);

  return (
    <div>
      <NavBar />
      <Hero />
      <GoldRule />
      <ElMundo />
      <GoldRule />
      <LosPersonajes />
    </div>
  );
}

export default Inicio;
