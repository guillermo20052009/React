import { useEffect, useState } from "react";

function PokemonCard() {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        return response.json();
      })
      .then((data) => setPokemon(data))
  }, []);

  if (!pokemon.id) {
    return <p>No se pudo cargar la información del Pokémon.</p>;
  }

  return (
    <li className="pokemon-card">
      <h2 className="pokemon-name">{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt="" className="pokemon-img" />
      <h3 className="text">HP: {pokemon.stats[0].base_stat}</h3>
    </li>
  );
}

export default PokemonCard;
