import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchBar from "../../components/Search-bar";
import Preloader from "../../components/Preloader";
import Card from "../../components/Card";
import RecentSearches from "../RecentSearches";

import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("pokemon_history");
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }

    const timer = setTimeout(() => setIsLoading(false), 800);
  }, []); //simular que la página tarda en cargar sólo para mostrar el preloader, las dos funciones anteriores se cargan sólo al montar el componente

  if (isLoading) {
    return <Preloader />;
  }

  const handlePokemonFound = (data) => {
    setRecentSearches((prev) => {
      const filtered = prev.filter((p) => p.id !== data.id); //evitar duplicados
      const updated = [data, ...filtered].slice(0, 5); //extraer los primeros 5
      localStorage.setItem("pokemon_history", JSON.stringify(updated)); //guardar en la memoria local
      return updated;
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex grow flex-col items-center justify-center gap-10 py-20">
        <SearchBar onPokemonFound={handlePokemonFound} />
        {/* {pokemonData && <Card data={pokemonData} />} */}
        <RecentSearches searches={recentSearches} />
      </main>
      <Footer />
    </div>
  );
}
