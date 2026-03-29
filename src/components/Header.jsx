import React from "react";
import logoDePokemon from "../images/pokemon-full-logo.png";

export default function Header() {
  return (
    <header className="flex w-screen bg-green-400 h-30">
      <img src={logoDePokemon}></img>
      <h1>Buscador todo-en-uno de Pokémon</h1>
    </header>
  );
}
