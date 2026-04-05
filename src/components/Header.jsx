import { useState } from "react";
import pokemonFinderLogo from "../images/pokemonFinderLogo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative flex w-screen flex-col content-center items-center justify-center gap-3 bg-red-800 p-6 text-center md:flex-row md:justify-between md:gap-10">
      <nav
        className="flex w-full flex-wrap items-center justify-center gap-6 md:w-5/7 md:justify-between"
        id="logo&navbarContainer"
      >
        <img src={pokemonFinderLogo} className="w-30"></img>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className="h-10 w-10 rounded-lg bg-white md:absolute md:opacity-0"
        >
          <ul className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg bg-[#fdc508] shadow-sm">
            <li className="block h-0.5 w-6 rounded-full bg-white"></li>
            <li className="block h-0.5 w-6 rounded-full bg-white"></li>
            <li className="block h-0.5 w-6 rounded-full bg-white"></li>
          </ul>
        </button>

        <ul
          className={`${isOpen ? "flex" : "hidden"} absolute top-8 z-50 w-9/10 flex-col gap-1 md:opacity-0`}
        >
          <li className="h-10 rounded-md bg-white p-2 text-black shadow-xl">
            Acerca de
          </li>
          <li
            className="h-10 rounded-md bg-gray-200 p-2 text-black shadow-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            Cerrar menú
          </li>
        </ul>
        <h2 className="hidden md:block">Acerca de</h2>
      </nav>

      <h2 className="text-xl/6 font-medium md:text-xl/5">
        Tu buscador favorito de Pokémon
      </h2>
    </header>
  );
}
