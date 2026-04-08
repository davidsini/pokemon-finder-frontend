import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { INITIAL_VISIBLE_POKEMONS } from "../utils/constants";

export default function RecentSearches() {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_POKEMONS);

  const [searches] = useState(() => {
    const saved = localStorage.getItem("pokemon_history");
    return saved ? JSON.parse(saved) : [];
  });

  if (searches.length === 0)
    return (
      <section className="mt-10 flex w-full flex-col items-center gap-4 text-black">
        <p>No tienes historial de búsqueda. Prueba a buscar un Pokémon.</p>
      </section>
    );

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + INITIAL_VISIBLE_POKEMONS);
  };

  return (
    <section className="mt-10 flex w-full max-w-50 flex-col items-center gap-4 md:max-w-200">
      <h3 className="text-lg font-bold text-[#1D1D1D]">Búsquedas recientes:</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {searches.slice(0, visibleCount).map((pokemon) => (
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
      {visibleCount < searches.length && (
        <button
          onClick={handleShowMore}
          className="flex cursor-pointer items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-black shadow-sm transition-colors hover:bg-gray-100 hover:font-medium"
        >
          Ver más
        </button>
      )}
    </section>
  );
}
