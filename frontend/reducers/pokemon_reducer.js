import * as ACTIONS from '../actions/pokemon_actions';
import merge from 'lodash/merge';

export const pokemonReducer = (oldState = {}, action) => {
  switch (action.type) {
    case ACTIONS.PokemonConstants.RECEIVE_ALL_POKEMON:
      return {pokemon: action.pokemon};
    case ACTIONS.PokemonConstants.RECEIVE_ONE_POKEMON:
      console.log(action.pokemon);
      return merge({}, oldState, {details: action.pokemon});
    default:
      return oldState;
    }
};
