import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import ElMundo from "../components/ElMundo";
import Codice from "../components/Codice";
import LosPersonajes from "../components/LosPersonajes";
import BoletinAlba from "../components/BoletinAlba";
import Footer from "../components/Footer";
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
      <Codice />
      <GoldRule />
      <LosPersonajes />
      <BoletinAlba />
      <Footer />
    </div>
  );
}

export default Inicio;
