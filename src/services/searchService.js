export const searchPokemon = async (query) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}/`,
    );
    if (!response.ok) throw new Error("Pokémon no encontrado");
    return await response.json();
  } catch (err) {
    throw err;
  }
};
