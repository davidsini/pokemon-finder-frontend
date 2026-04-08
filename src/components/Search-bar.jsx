import findIcon from "../images/find-icon.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchPokemon } from "../utils/pokemonApi";
import pikachu from "../images/Pikachu.gif";

export default function SearchBar({ onPokemonFound }) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null); //guardar el mensaje de error

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!query) {
      setError("Debes ingresar un nombre de Pokémon válido");
      return;
    }

    try {
      const data = await searchPokemon(query);
      if (onPokemonFound) onPokemonFound(data);
      navigate("/resultados", { state: { pokemonData: data } });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center md:w-full">
      <img
        src={pikachu}
        className="w-50"
        alt="GIF de Pikachu moviendo la cabeza"
      ></img>
      <form
        id="search-form"
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
          Puedes buscar entre cientos de tus Pokémon favoritos.
        </p>
      </form>
    </div>
  );
}
