import { useState } from 'react'
import './App.css'
import PokemonList from './components/PokemonList'
import PokemonDetailsprops from './components/PokemonDetails'

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState();

  return (
    <>
      {selectedPokemon && (
        <div>
          <h2>Pokemon Seleccionado</h2>
          {/* Asegúrate de que PokemonDetails esté importado correctamente */}
          <PokemonDetailsprops pokemon={selectedPokemon} />
        </div>
      )}
      <h2>Lista de Pokemon</h2>
      <PokemonList selectPokemon={setSelectedPokemon} />
    </>
  );
}

export default App;

