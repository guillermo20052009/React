import React from 'react';

function PokemonDetails(props) {
  const { pokemon } = props;

  // Manejo de datos incompletos o errores
  if (!pokemon || !pokemon.sprites || !pokemon.stats) {
    return <p>No se pudo cargar la información del Pokémon.</p>;
  }

  return (
    <section className='pokemon-details'>
      <div className='pokemon-container'>
        <h2 className='text'>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt="imagen pokemon" className='pokemon-img' />
        <h3 className='text'>HP: {pokemon.stats[0].base_stat}</h3>
      </div>
    </section>
  );
}

export default PokemonDetails;
