import findIcon from "../images/find-icon.webp";
import { searchPokémon } from "../services/searchService";

export default function SearchBar() {
  return (
    <div className="bg-cyan-50 py-15">
      <form className="flex w-full flex-col content-center items-center justify-center gap-3">
        <label className="flex flex-row content-center items-center justify-center gap-2 *:max-h-7">
          <input
            type="text"
            placeholder="Buscar Pokémon..."
            className="rounded-xl border-3 border-black p-2 text-gray-600"
          ></input>
          <button className="w-5" onClick={searchPokémon}>
            <img src={findIcon}></img>
          </button>
        </label>
        <p className="text-center text-base/5">
          Puedes buscar entre cientos de Pokémon.
        </p>
      </form>
    </div>
  );
}
