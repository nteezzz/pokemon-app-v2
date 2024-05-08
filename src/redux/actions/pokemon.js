import { createAction } from "@reduxjs/toolkit";

export const FETCH_POKEMON_REQUEST = createAction('FETCH_POKEMON_REQUEST');
export const FETCH_POKEMON_SUCCESS = createAction('FETCH_POKEMON_SUCCESS');
export const FETCH_POKEMON_FAILURE = createAction('FETCH_POKEMON_FAILURE');
//export const FETCH_NEXT_POKEMON_REQUEST= createAction('FETCH_NEXT_POKEMON_REQUEST');
export const FETCH_NEXT_POKEMON_SUCCESS= createAction('FETCH_NEXT_POKEMON_SUCCESS')

