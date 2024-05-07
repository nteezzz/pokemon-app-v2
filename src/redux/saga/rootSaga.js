import { all } from 'redux-saga/effects';
import {watchFetchPokemons}  from './pokemonsSaga';
import { watchFetchPokemonDetail } from './pokemonDetailSaga';

const rootSaga= function* (){
    yield all([watchFetchPokemons(),watchFetchPokemonDetail()]);
};

export default rootSaga;