import React from "react";
import logoDePokemon from "../images/pokemon-full-logo.png";

export default function Header() {
  return (
    <header className="flex w-screen flex-col content-center items-center justify-center gap-3 bg-red-800 p-10 text-center md:flex-row md:gap-10">
      <div>
        <img src={logoDePokemon} className="w-80"></img>
        <h1 className="font-pokemon text-center text-5xl font-bold tracking-wider">
          Finder
        </h1>
      </div>

      <h2 className="text-3xl font-bold md:text-4xl">
        Tu buscador favorito de Pokémon
      </h2>
    </header>
  );
}
