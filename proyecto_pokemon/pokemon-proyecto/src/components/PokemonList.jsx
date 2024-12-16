import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import "./PokemonList.css"
import GetForm from "./GetForm";

function PokemonList(props) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemons(1,10);
  }, []);

  const fetchPokemon = async (index) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    const data = await response.json();
    return data;
  };

  const getPokemons = async (from,to) => {
    setLoading(true);
    const pkmnArr = [];
    for (let i = from; i <= to; i++) {
      const pokemon = await fetchPokemon(i);
      pkmnArr.push(pokemon);
    }
    setPokemons(pkmnArr);
    setLoading(false);
  };

  // Mapea los Pokémon a tarjetas
  const PokemonCards = pokemons.map((pokemon) => (
    <PokemonCard key={pokemon.id} pokemon={pokemon} selectPokemon={props.selectPokemon} />
  ));

  return (
    <div> <GetForm getPokemons={getPokemons}></GetForm>
    <ul className="pokemon-list">
      {loading ? <p>Cargando Pokémon...</p> : PokemonCards}
    </ul></div>
   
  );
}

export default PokemonList;
