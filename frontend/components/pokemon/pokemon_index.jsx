import React from 'react';
import PokemonIndexItem from './pokemon_index_item';


const PokemonIndex = ({pokemon, children}) => {

  let pokemonList;
  if (pokemon) {
    pokemonList = pokemon.map((poke, index) => (
      <PokemonIndexItem key={`${poke.name}+${index}`}
        pokemon={poke}/>
    ));
  } else {
    pokemonList = [];
  }


  return (
    <section className="pokedex">
      <ul>
        {pokemonList}
      </ul>
      {children}
    </section>
  );

};


export default PokemonIndex;
