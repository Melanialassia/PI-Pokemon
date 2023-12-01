const axios = require("axios");
const { Pokemon } = require('../db');

const getPokemonController = async (nameToLowerCase) => {
    if (nameToLowerCase) {
        const pokemonName = await Pokemon.findOne({
            where: { name: nameToLowerCase }
        });

        if (pokemonName) {
            return pokemonName;
        } else {
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
        }
    } else {
        const limit = 100;
        const offset = 0;
        const informacion = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        const api = await informacion.data.results;

        const dataPokemon = api.map(async (e) => {
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

            }
        });

        const infoPokemons = await Promise.all(dataPokemon)
        return infoPokemons;
    };
};

module.exports = {
    getPokemonController
};

