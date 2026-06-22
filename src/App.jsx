import { HashRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Arkenor from "./pages/Arkenor";
import Meibel from "./pages/Meibel";
import Pirocles from "./pages/Pirocles";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/arkenor" element={<Arkenor />} />
        <Route path="/meibel" element={<Meibel />} />
        <Route path="/pirocles" element={<Pirocles />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
