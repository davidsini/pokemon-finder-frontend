import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/Search-bar";
import Card from "./components/Card";

import "./index.css";

function App() {
  const [pokemonData, setPokemonData] = useState(null);

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
