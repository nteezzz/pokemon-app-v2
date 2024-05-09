import React, { useEffect } from 'react';
import './productListingPage.css'
import { PokemonListCards } from '../../components/PokemonListCards/pokemonListCards.jsx';
import { LogComponent } from '../../components/LogComponent/logComponent.jsx';
import {useSelector, useDispatch} from 'react-redux'
import { ToggleSwitch } from '../../components/ToggleSwitch/toggleSwitch.jsx';
import { FETCH_POKEMON_REQUEST as fetchPokemonList } from '../../redux/actions/pokemon.js';
import { PlaceholderListCards } from '../../components/PlaceholderListCards/placeholderListCards.jsx';

export const ProductListingPage = () => {
  
  const themeRedux= useSelector((state)=>state.theme.theme);
  const dispatch= useDispatch();
  const pokemons = useSelector(state => state.pokemon.pokemons);
  const loading = useSelector(state => state.pokemon.loading);
  const error = useSelector(state => state.pokemon.error);
  const next = useSelector(state =>state.pokemon.next);

  useEffect(() => {
      dispatch(fetchPokemonList({page:'PLP', api:'https://pokeapi.co/api/v2/pokemon/', next: next }));
  },[dispatch]);
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight && !loading && next) {
        dispatch(fetchPokemonList({page:'PLP', api:'https://pokeapi.co/api/v2/pokemon/', next: next }))
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch, loading]);


  return (
    <div>
      <div className={themeRedux === 'light' ? 'light-theme' : 'dark-theme'}>
      <div className='header-row'><h1>Pokémon App</h1><ToggleSwitch/><div className='login-container'><LogComponent/></div></div>
      {pokemons && <ul className='row'>
      {loading && <PlaceholderListCards/>}
      {error && <p>Error: {error}</p>}
        {pokemons.map((pokemon, index) => (
          <PokemonListCards pokemon={pokemon} index={index}/>
        ))}
        <li>
        </li>
      </ul> }
    </div>
      
    </div>
  );
};
