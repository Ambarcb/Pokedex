// https://pokeapi.co/api/v2/pokemon/bulbasaur

import { PokemonDetails } from "../types/types";
import { formatPokemonName } from "../utils/utils";

export async function fetchPokemon(name: string): Promise<PokemonDetails>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${formatPokemonName(name)}`); 
    
    if (!response.ok){
        throw new Error(`Error fetching ${name}`);
    }
    
    const result = await response.json();  

    const pokemon = {
        id: result.id,
        name: result.name, 
        hp: result.stats[0].base_stat,
        attack: result.stats[1].base_stat,
        defense: result.stats[2].base_stat,
        imgSrc: result.sprites.front_default,
    }

    return pokemon; 
}