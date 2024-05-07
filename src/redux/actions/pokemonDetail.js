
export const FETCH_POKEMONDETAIL_REQUEST = 'FETCH_POKEMONDETAIL_REQUEST';
export const FETCH_POKEMONDETAIL_SUCCESS = 'FETCH_POKEMONDETAIL_SUCCESS';
export const FETCH_POKEMONDETAIL_FAILURE = 'FETCH_POKEMONDETAIL_FAILURE';

export const fetchPokemonDetailRequest = (id) => ({
  type: FETCH_POKEMONDETAIL_REQUEST,
  payload: id,
});

export const fetchPokemonDetailSuccess = (pokemon) => ({
  type: FETCH_POKEMONDETAIL_SUCCESS,
  payload: pokemon,
});

export const fetchPokemonDetailFailure = (error) => ({
  type: FETCH_POKEMONDETAIL_FAILURE,
  payload: error,
});
