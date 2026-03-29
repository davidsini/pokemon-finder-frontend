import React from "react";
import "../blocks/footer.css";
import logoDePokemon from "../images/pokemon-full-logo.png";

export default function Footer() {
  return (
    <Footer className="footer">
      <img src={logoDePokemon}></img>
      <h1>Pokémon Finder</h1>
      <p>Dēivid Sans 2026. Todos los derechos reservados.</p>
    </Footer>
  );
}
