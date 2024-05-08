import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_POKEMON_FAILURE, FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS ,FETCH_NEXT_POKEMON_SUCCESS} from '../actions/pokemon';

function* fetchPokemonData(action) {
    const { page, api, next} = action.payload;
    if(next==null){
        try {
            const response = yield call(axios.get, api);
            yield put(FETCH_POKEMON_SUCCESS({ data: response.data, page }));
        } catch (error) {
            yield put(FETCH_POKEMON_FAILURE(error));
        }
    }
    else{
        try {
            const response = yield call(axios.get, next);
            console.log(response.data);
            yield put(FETCH_NEXT_POKEMON_SUCCESS({ data: response.data, page }));
        } catch (error) {
            yield put(FETCH_POKEMON_FAILURE(error));
        }        
        
    }
}


export function* watchFetchPokemonData() {
    yield takeEvery(FETCH_POKEMON_REQUEST, fetchPokemonData);
}
// export function* watchFetchNextPokemonData() {
//     yield takeEvery(FETCH_NEXT_POKEMON_REQUEST, fetchNextPokemonData);
// }