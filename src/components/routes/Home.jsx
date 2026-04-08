import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchBar from "../../components/Search-bar";
import Preloader from "../../components/Preloader";
import RecentSearches from "../RecentSearches";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  const handlePokemonFound = (data) => {
    const saved = localStorage.getItem("pokemon_history");
    const prev = saved ? JSON.parse(saved) : [];

    const filtered = prev.filter((p) => p.id !== data.id);
    const updated = [data, ...filtered].slice(0, 10); //obtener los primeros 10

    localStorage.setItem("pokemon_history", JSON.stringify(updated));
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex grow flex-col items-center justify-center gap-10 py-20">
        <SearchBar onPokemonFound={handlePokemonFound} />
        <RecentSearches />
      </main>
      <Footer />
    </div>
  );
}
