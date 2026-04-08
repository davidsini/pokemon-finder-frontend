import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import RecentSearches from "../RecentSearches";

export default function PokemonDetails() {
  const location = useLocation();
  const pokemonData = location.state?.pokemonData;
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("pokemon_history");
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, [pokemonData]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex grow flex-col items-center justify-center gap-10 py-20">
        {pokemonData ? (
          <Card data={pokemonData} />
        ) : (
          <p>
            No se encontró información del Pokémon. Por favor, intenta con otro.
          </p>
        )}
        <RecentSearches searches={recentSearches} />
      </div>
      <Footer />
    </div>
  );
}
