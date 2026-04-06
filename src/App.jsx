import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/components/routes/Home";
import PokemonDetails from "../src/components/routes/PokemonDetails";
import About from "../src/components/routes/About";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resultados" element={<PokemonDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
