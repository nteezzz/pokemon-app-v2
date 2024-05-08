import { FETCH_NEXT_POKEMON_SUCCESS,  FETCH_POKEMON_FAILURE, FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS } from "../actions/pokemon.js";
import { createSlice } from "@reduxjs/toolkit";


const fetchDataSlice = createSlice({
    name: "pokemon",
    initialState: {
        pokemons: null,
        pokemonDetail: null,
        next: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(FETCH_POKEMON_REQUEST, (state) => {
            state.loading = true;
        });
        builder.addCase(FETCH_POKEMON_SUCCESS, (state, action) => {
            state.loading= false;
            if (action.payload.page === "PLP") {
                state.pokemons= action.payload.data.results;
                state.next= action.payload.data.next;
            } else {
                state.pokemonDetail = action.payload.data;
            }
        });
        builder.addCase(FETCH_NEXT_POKEMON_SUCCESS,(state, action)=>{
            state.loading=false;
            state.pokemons= [...state.pokemons, ...action.payload.data.results];
            state.next= action.payload.data.next;
        })
        builder.addCase(FETCH_POKEMON_FAILURE, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export default fetchDataSlice.reducer;