import React from "react";

export const PopulateType=({pokemonType})=>{
        const typeString= `pokemon-type type-${pokemonType}`;

    return(
        <div className={typeString}><h6>{pokemonType}</h6></div>
    );
}