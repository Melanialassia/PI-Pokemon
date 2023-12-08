const axios = require("axios");
const { Pokemon, Types } = require('../db');

const getPokemonController = async () => {
        // Obtener todos los Pokémon de la API
        const apiResponse = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0");
        const apiPokemons = apiResponse.data.results;

        // Mapear los Pokémon de la API
        const apiDataPokemon = apiPokemons.map(async (e) => {
            const info = await axios.get(e.url);
            const p = info.data;
            return {
                id: p.id,
                name: p.name,
                types: p.types.map((p) => p.type.name),
                image: p.sprites.other.home.front_default,
                hp: p.stats[0].base_stat,
                attack: p.stats[1].base_stat,
                defense: p.stats[2].base_stat,
                speed: p.stats[5].base_stat,
                height: p.height,
                weight: p.weight
            };
        });

        // Obtener todos los Pokémon de la base de datos
        const dbPokemons = await Pokemon.findAll({
            //busco en la tabla los modelos que necesito
            include:{
             model: Types,
             atributes: ["name"]
            }
     });
     
        const dbDataPokemon = dbPokemons.map((p) => {
            return {
                id: p.id,
                name: p.name,
                types: p.Types.map((t) => t.name),
                image: p.image,
                hp: p.hp,
                attack: p.attack,
                defense: p.defense,
                speed: p.speed,
                height: p.height,
                weight: p.weight
            };
        });

        // Esperar a que se resuelvan todas las promesas
        const apiPokemonsData = await Promise.all(apiDataPokemon);

        // Combinar ambos conjuntos de Pokémon
        const allPokemons = [...apiPokemonsData, ...dbDataPokemon];

        return allPokemons;
};

const getPokemonByQuery = async (nameToLowerCase) => {
    const getPokemon = await getPokemonController();

    const filter = getPokemon.filter((p) => p.name.includes(nameToLowerCase));

    const response = filter.map((p) =>{
        return {
                id: p.id,
                name: p.name,
                types: p.types,
                image: p.image,
                hp: p.hp,
                attack: p.attack,
                defense: p.defense,
                speed: p.speed,
                height: p.height,
                weight: p.weight
            }
    } );

    return response;
    
}
module.exports = {
    getPokemonController,
    getPokemonByQuery
};


