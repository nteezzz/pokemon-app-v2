
import { FETCH_POKEMONS_REQUEST, FETCH_POKEMONS_SUCCESS, FETCH_POKEMONS_FAILURE } from '../actions/pokemons';

const initialState = {
  pokemon: null,
  loading: false,
  error: null,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_POKEMONS_SUCCESS:
      return { ...state, pokemon: action.payload, loading: false };
    case FETCH_POKEMONS_FAILURE:
      return { ...state, loading: false, error: action.payload }; 
    default:
      return state;
  }
};
export default pokemonReducer

