import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import { Router, Route, hashHistory } from 'react-router';
import * as ACTIONS from '../actions/pokemon_actions';


const Root = ({ store }) => {

    const pokemonIndexOnEnter = () => {
      store.dispatch(ACTIONS.requestAllPokemon());
    };

    const singlePokemonOnEnter = (nextState) => {
      store.dispatch(ACTIONS.requestOnePokemon(nextState.params.id));
    };

    return (
      <Provider store={store}>
        <Router history={hashHistory} >
          <Route path="/" component={PokemonIndexContainer}
            onEnter={pokemonIndexOnEnter}>
            <Route path="pokemon/:id" component={PokemonDetailContainer}
              onEnter={singlePokemonOnEnter}/>
          </Route>
        </Router>
      </Provider>
    );
};

export default Root;
