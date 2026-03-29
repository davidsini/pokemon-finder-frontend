import React from "react";
import "../blocks/footer.css";
import logoDePokemon from "../images/pokemon-full-logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-container">
        <img src={logoDePokemon}></img>
        <h2>Pokémon Finder</h2>
      </div>
      <p>© Dēivid Sans 2026. Todos los derechos reservados.</p>
    </footer>
  );
}
