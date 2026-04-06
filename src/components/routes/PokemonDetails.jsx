import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader";

import { useState } from "react";

export default function PokemonDetails() {
  const [pokemonData, setPokemonData] = useState(null);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex grow flex-col items-center justify-center gap-10 py-20">
        {<Card data={pokemonData} />}
      </div>
      <Footer />
    </div>
  );
}
