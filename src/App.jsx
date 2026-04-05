import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/Search-bar";
import Card from "./components/Card";
import Preloader from "./components/Preloader";

import "./index.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
  }, []); //simular que la página tarda en cargar sólo para mostrar el preloader

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex grow flex-col items-center justify-center gap-10 py-20">
        <SearchBar onPokemonFound={setPokemonData} />
        {pokemonData && <Card data={pokemonData} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
