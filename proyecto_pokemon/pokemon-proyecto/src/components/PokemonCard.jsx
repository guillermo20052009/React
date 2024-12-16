import "./PokemonCard.css";
function PokemonCard(props) {
  const { pokemon, selectPokemon } = props;

  if (!pokemon || !pokemon.id || !pokemon.stats || !pokemon.sprites) {
    return <p>No se pudo cargar la información del Pokémon.</p>;
  }

  return (
    <li className="pokemon-card" onClick={() => selectPokemon(pokemon)}>
      <h2 className="pokemon-name">{pokemon.name}</h2>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="pokemon-img"
      />
      <h3 className="text">HP: {pokemon.stats[0].base_stat}</h3>
    </li>
  );
}

export default PokemonCard;

