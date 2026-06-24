import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Inicio from "./pages/Inicio";
import Mundo from "./pages/Mundo";
import CodicePage from "./pages/CodicePage";
import Heroes from "./pages/Heroes";
import Arkenor from "./pages/Arkenor";
import Meibel from "./pages/Meibel";
import Pirocles from "./pages/Pirocles";
import Vigilia from "./pages/Vigilia";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/mundo" element={<Mundo />} />
          <Route path="/codice" element={<CodicePage />} />
          <Route path="/heroes" element={<Heroes />} />
          <Route path="/heroes/arkenor" element={<Arkenor />} />
          <Route path="/heroes/meibel" element={<Meibel />} />
          <Route path="/heroes/pirocles" element={<Pirocles />} />
          <Route path="/vigilia" element={<Vigilia />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
