import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { generateImageURL } from '../../utils/imageURL.js';
import './productDescriptionpage.css';

import { PopulateType } from '../../components/PopulateType/populateType.jsx';
import { PokemonStats } from '../../components/PokemonStats/pokemonStats.jsx';
import { LogComponent } from '../../components/LogComponent/logComponent.jsx';
import { ToggleSwitch } from '../../components/ToggleSwitch/toggleSwitch.jsx';
import {useSelector, useDispatch} from 'react-redux'
import { FETCH_POKEMON_REQUEST as fetchPokemonDetails } from '../../redux/actions/pokemon.js';

export const ProductDescriptionPage = () => {
const { id } = useParams();
const API= `https://pokeapi.co/api/v2/pokemon/${id}/`;
//Using Redux
const themeRedux= useSelector((state)=>state.theme.theme);
const dispatch= useDispatch();
const pokemonDetail = useSelector(state => state.pokemon.pokemonDetail);
const loading = useSelector(state => state.pokemon.loading);
const error = useSelector(state => state.pokemon.error);

useEffect(() => {
  dispatch(fetchPokemonDetails({ api: API, page: "PDP" }));
}, [API]);


return (
<>
{loading && <p>Loading...</p>}
{error && <p>Error: {error}</p>}
{pokemonDetail &&
<div className='main-container'>
<div className={`login-container ${themeRedux==='light' ? 'light-theme' : 'dark-theme' }`} id='pdp-login'><LogComponent/></div>
<div className={`pdp-container ${themeRedux==='light' ? 'light-theme' : 'dark-theme' }`}>
    <ToggleSwitch/>
    <div className='pokemon-card'id='grey-area'>
      <div className='row'>
        <div className='pokemon-header'><h2>{pokemonDetail.name}#{ id.toString().padStart(3, '0')}</h2></div>
      </div>
      <div className='row'>
        <div className='pokemon-content'>
        <div className='col'>
        <img className="pokemon-img" src={generateImageURL(id)} alt={pokemonDetail.name} />
        </div>
        <div className='col'>
          <div className='pokemon-body'>
          <div className='pokemon-text'><h5>Height: {pokemonDetail.height}ft</h5></div>
            <div className='pokemon-text'><h5>Weight: {pokemonDetail.weight}lbs</h5></div>
            <div className="pokemon-abilities">
              <h5>Abilities:</h5>
              <ul>
                {pokemonDetail.abilities.map((ability, index)=>(
                <li key={index}>{ability.ability.name}</li>
                ))}
              </ul>
            </div>
            <div className="pokemon-type">
              <h5>Type:</h5>
              <ul>
                {pokemonDetail.types.map((type, index)=>(
                <li key={index}>
                  <PopulateType pokemonType={type.type.name} />
                </li>
                ))}
              </ul>
            </div>
            <PokemonStats stats={pokemonDetail.stats}/>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
}
</>

);
};