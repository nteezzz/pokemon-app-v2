
import { takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_POKEMONS_REQUEST, fetchPokemonsSuccess, fetchPokemonsFailure } from '../actions/pokemons.js';
import axios from 'axios';

function* fetchPokemonsSaga() {
  try {
    const response = yield call(axios.get, 'https://pokeapi.co/api/v2/pokemon');
    yield put(fetchPokemonsSuccess(response.data.results));
  } catch (error) {
    yield put(fetchPokemonsFailure(error.message));
  }
}

export function* watchFetchPokemons() {
  yield takeEvery(FETCH_POKEMONS_REQUEST, fetchPokemonsSaga);
}
