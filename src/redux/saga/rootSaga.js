import { all } from 'redux-saga/effects';
import { watchFetchPokemonData } from './fetchPokemonSaga';

const rootSaga= function* (){
    yield all([watchFetchPokemonData()]);
};

export default rootSaga;