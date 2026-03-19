import { HashRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Arkenor from "./pages/Arkenor";
import Meibel from "./pages/Meibel";
import Pirocles from "./pages/Pirocles";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/arkenor" element={<Arkenor />} />
        <Route path="/meibel" element={<Meibel />} />
        <Route path="/pirocles" element={<Pirocles />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
