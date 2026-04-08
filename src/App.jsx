import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/routes/Home";
import PokemonDetails from "./components/routes/PokemonDetails";
import About from "./components/routes/About";
import RecentSearchesPage from "./components/routes/RecentSearchesPage";
import { useState, useEffect } from "react";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resultados" element={<PokemonDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/recent-searches" element={<RecentSearchesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
