import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './productListingPage.css'
import { generateImageURL } from '../utils/imageURL';
import { LogComponent } from '../components/logComponent';
import {useSelector, useDispatch} from 'react-redux'
import { ToggleSwitch } from '../components/toggleSwitch';
import { FETCH_POKEMON_REQUEST as fetchPokemonList } from '../redux/actions/pokemon.js';

export const ProductListingPage = () => {
  
  const themeRedux= useSelector((state)=>state.theme.theme);
  const dispatch= useDispatch();
  const pokemons = useSelector(state => state.pokemon.pokemons);
  const loading = useSelector(state => state.pokemon.loading);
  const error = useSelector(state => state.pokemon.error);
  const next = useSelector(state =>state.pokemon.next);
  useEffect(() => {
    dispatch(fetchPokemonList({page:'PLP', api:'https://pokeapi.co/api/v2/pokemon/', next: next}));
  }, []);
  useEffect(() => {
      dispatch(fetchPokemonList({page:'PLP', api:'https://pokeapi.co/api/v2/pokemon/', next: next }));
  }, [next]);
  
  return (
    <div>
      <div className={themeRedux === 'light' ? 'light-theme' : 'dark-theme'}>
      <div className='header-row'><h1>Pokémon App</h1><ToggleSwitch/><div className='login-container'><LogComponent/></div></div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {pokemons&& <ul className='row'>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            <div className='col'>
            <div className="card" id='grey-area'>
                <img className="card-img-top" src={generateImageURL(index+1)} alt="pokemon-image"/>
                <div className="card-body">
                <h5 className="card-title">{pokemon.name}</h5>
                <Link to={`/pokemons/${index + 1}`}>more details</Link>
            </div>
            </div>
            </div>
          </li>
        ))}
        <li>
        </li>
      </ul> }
    </div>
      
    </div>
  );
};
