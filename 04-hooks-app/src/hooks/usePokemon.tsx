import { useEffect, useState } from "react";

interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}

interface pokemonProps {
  id: number;
}

export const usePokemon = ({ id }: pokemonProps) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);


  const getPokemonById = async(id: number) =>{
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');

    const data = await response.json()

    setPokemon({
        id: id,
        name: data.name,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    })
  }

  useEffect(() =>{

  })

  return {
    // ? properties
    pokemon,
  };
};
