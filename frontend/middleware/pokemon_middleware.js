import * as API from '../util/api_util';
import * as ACTIONS from '../actions/pokemon_actions';


export const PokemonMiddleware = ({ dispatch }) => next => action => {

  switch (action.type) {
    case ACTIONS.PokemonConstants.REQUEST_ALL_POKEMON:
      const success = (pokemon) => dispatch(ACTIONS.receiveAllPokemon(pokemon));
      API.fetchAllPokemon(success);
      break;
    case ACTIONS.PokemonConstants.REQUEST_ONE_POKEMON:
      const success2 = (pokemon) => dispatch(ACTIONS.receiveOnePokemon(pokemon));
      API.fetchOnePokemon(success2, action.id);
      break;
    default:
      return next(action);
  }
};
