import { POKEMON_API_URL } from "./constants";

export const searchPokemon = async (query) => {
  try {
    const response = await fetch(`${POKEMON_API_URL}${query.toLowerCase()}/`);
    if (!response.ok) {
      throw new Error("No se ha encontrado nada");
    }
    return await response.json();
  } catch (err) {
    throw err;
  }
};
