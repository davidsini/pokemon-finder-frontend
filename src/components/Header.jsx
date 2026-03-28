import React from "react";
import "../blocks/header.css";
import logoDePokemon from "../images/pokemon-full-logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logoDePokemon}></img>
      <h1>Buscador todo-en-uno de Pokémon</h1>
    </header>
  );
}
