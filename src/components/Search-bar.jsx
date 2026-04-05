import findIcon from "../images/find-icon.webp";
import { useState } from "react";
import { searchPokemon } from "../services/searchService";

export default function SearchBar({ onPokemonFound }) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null); //guardar el mensaje de error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!query) {
      setError("Debes ingresar un nombre de Pokémon válido");
      return;
    }

    try {
      const data = await searchPokemon(query);
      onPokemonFound(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center md:w-full">
      <form
        className="flex w-full flex-col content-center items-center justify-center gap-3"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-row content-center items-center justify-center gap-2 *:max-h-7">
          <input
            type="text"
            placeholder="Buscar por nombre..."
            className="rounded-xl border-3 border-black p-2 text-gray-600"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            minLength={2}
          ></input>
          <button className="w-5 cursor-pointer transition-transform duration-200 hover:scale-150">
            <img src={findIcon} alt="Buscar"></img>
          </button>
        </label>
        {error && (
          <p className="mt-2 animate-bounce text-sm font-bold text-red-600">
            {error}
          </p>
        )}
        <p className="text-center text-base/5 md:text-xl">
          Puedes buscar entre cientos de Pokémon.
        </p>
      </form>
    </div>
  );
}
