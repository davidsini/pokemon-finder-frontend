import { useNavigate } from "react-router-dom";

export default function RecentSearches({ searches }) {
  const navigate = useNavigate();

  return (
    <section className="lex mt-10 w-full max-w-200 flex-col items-center gap-4">
      <h3 className="text-lg font-bold">Búsquedas recientes:</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {searches.map((pokemon, index) => (
          <button
            key={pokemon.id - index}
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
            <span className="text-sm font-medium capitalize">
              {pokemon.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
