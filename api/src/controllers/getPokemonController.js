const axios = require("axios");
const { Pokemon, Types } = require('../db');

const getPokemonController = async (nameToLowerCase) => {
    if (nameToLowerCase) {
        const pokemonName = await Pokemon.findOne({
            where: { name: nameToLowerCase }
        });

        if (pokemonName) {
            return pokemonName;
        } else {
            try {
                const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nameToLowerCase}`);
                const pokemon = {
                    id: data.id,
                    name: data.name,
                    image: data.sprites.front_default,
                    hp: data.stats[0].base_stat,
                    attack: data.stats[1].base_stat,
                    defense: data.stats[2].base_stat,
                    speed: data.stats[5].base_stat,
                    height: data.height,
                    weight: data.weight
                };
                return pokemon;
            } catch (error) {
                console.error(`No se encontró el Pokémon con nombre ${nameToLowerCase}`);
                return null;
            }
        }
    } else {
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
    }
};

module.exports = {
    getPokemonController
};

