
import { FETCH_POKEMONDETAIL_REQUEST,FETCH_POKEMONDETAIL_SUCCESS,FETCH_POKEMONDETAIL_FAILURE } from '../actions/pokemonDetail';

const initialState = {
  pokemon: null,
  loading: false,
  error: null,
};

const pokemonDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONDETAIL_REQUEST:
      return { ...state, id: action.payload, loading: true, error: null };
    case FETCH_POKEMONDETAIL_SUCCESS:
      return { ...state, pokemon: action.payload, loading: false };
    case FETCH_POKEMONDETAIL_FAILURE:
      return { ...state, loading: false, error: action.payload };    
    default:
      return state;
  }
};
export default pokemonDetailReducer

