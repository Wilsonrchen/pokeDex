const url = "https://pokeapi.co/api/v2/pokemon?limit=10";

export const fetchPokemon = async () => {
  const response = await fetch(`${url}`);
  const result = await response.json();
  return result.results;
};

export const fetchSinglePokemon = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const result = await response.json();
  return result;
};
/* 
    Write a AJAX helper function which takes a url, and returns a list of pokemon 
        TIPS: use the url above in the browser to see what we're getting from the API
*/
