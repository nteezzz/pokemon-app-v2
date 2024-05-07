
import { takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_POKEMONDETAIL_REQUEST, fetchPokemonDetailSuccess, fetchPokemonDetailFailure } from '../actions/pokemonDetail.js';
import axios from 'axios';

function* fetchPokemonDetailSaga(action) {
  try {
    const response = yield call(axios.get, `https://pokeapi.co/api/v2/pokemon/${action.payload}/`);
    yield put(fetchPokemonDetailSuccess(response.data));
  } catch (error) {
    yield put(fetchPokemonDetailFailure(error.message));
  }
}

export function* watchFetchPokemonDetail() {
  yield takeEvery(FETCH_POKEMONDETAIL_REQUEST, fetchPokemonDetailSaga);
}
