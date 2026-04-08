import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function RecentSearches() {
  const [searches, setSearches] = useState([]);
  const navigate = useNavigate();

  if (!searches || searches.length === 0) return null; // no mostrar nada si searches está vacío

  useEffect(() => {
    const saved = localStorage.getItem("pokemon_history");
    if (saved) {
      setSearches(JSON.parse(saved));
    }
  }, []);

  return (
    <section className="mt-10 flex w-full max-w-200 flex-col items-center gap-4">
      <h3 className="text-lg font-bold text-[#1D1D1D]">Búsquedas recientes:</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {searches.length === 0 ? (
          <p className="mt-10 text-gray-500">
            No has buscado ningún Pokémon todavía.
          </p>
        ) : (
          <div className="mt-6 flex flex-wrap justify-center gap-3">
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
                  className="h-10 w-10"
                />
                <span className="text-lg font-medium capitalize">
                  {pokemon.name}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
