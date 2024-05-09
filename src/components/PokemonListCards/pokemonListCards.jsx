import React from "react";
import { generateImageURL } from "../../utils/imageURL";
import { Link } from "react-router-dom";
import './pokemonListCards.css'
export const PokemonListCards=({pokemon,index})=>{
    return(
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
    );
}