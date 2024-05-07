
export const FETCH_POKEMONS_REQUEST = 'FETCH_POKEMONS_REQUEST';
export const FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS';
export const FETCH_POKEMONS_FAILURE = 'FETCH_POKEMONS_FAILURE';

export const fetchPokemonsRequest = () => ({
  type: FETCH_POKEMONS_REQUEST,
});

export const fetchPokemonsSuccess = (pokemon) => ({
  type: FETCH_POKEMONS_SUCCESS,
  payload: pokemon,
});

export const fetchPokemonsFailure = (error) => ({
  type: FETCH_POKEMONS_FAILURE,
  payload: error,
});
