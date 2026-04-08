import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import RecentSearches from "../RecentSearches";
import { useLocation } from "react-router-dom";

export default function PokemonDetails() {
  const location = useLocation();
  const pokemonData = location.state?.pokemonData;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex grow flex-col items-center justify-center gap-10 py-20">
        {pokemonData ? (
          <Card data={pokemonData} />
        ) : (
          <p>No se ha encontrado nada.</p>
        )}
        <RecentSearches />
      </div>
      <Footer />
    </div>
  );
}
