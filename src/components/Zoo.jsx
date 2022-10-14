import { fetchPokemon } from "../api";
import { useState, useEffect } from "react";

const Zoo = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    async function getAllPokemon() {
      const pokemans = await fetchPokemon();
      setPokemon(pokemans);
    }
    getAllPokemon();
  }, []);

  return (
    <div>
      {pokemon.map((poke) => {
        return (
          <div key={poke.id}>
            <h2>{poke.name}</h2>
            <button>See Details</button>
          </div>
        );
      })}
    </div>
  );
};

export default Zoo;
