import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RecentSearches() {
  const [searches, setSearches] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("pokemon_history");
    if (saved) {
      setSearches(JSON.parse(saved));
    }
  }, []);

  if (searches.length === 0) return null; // No mostrar nada si no hay historial

  return (
    <section className="mt-10 flex w-full max-w-50 flex-col items-center gap-4 md:max-w-200">
      <h3 className="text-lg font-bold text-[#1D1D1D]">Búsquedas recientes:</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {searches.map((pokemon) => (
          <button
            key={pokemon.id}
            onClick={() =>
              navigate("/resultados", { state: { pokemonData: pokemon } })
            }
            className="flex cursor-pointer items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 shadow-sm transition-colors hover:bg-gray-100"
          >
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="h-8 w-8"
            />
            <span className="text-sm font-medium text-[#1D1D1D] capitalize">
              {pokemon.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
