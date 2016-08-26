import React from 'react';


export const PokemonDetail = ({details, toys}) => {
  console.log("in the details");
    return (
    <section className="pokemon-detail">
      <ul>
        <img src={details.image_url} alt=""/>
          <li><h2>{details.name}</h2></li>
          <li>Type: {details.poke_type}</li>
          <li>Attack: {details.attack}</li>
          <li>Defense: {details.defense}</li>
          <li>Moves: &#34;{details.moves}&#34;</li>
        <section className="toys">
            <h3>Toys</h3>
          <ul className="toy-list">
            {}
          </ul>
        </section>
      </ul>
    </section>
  );
};
