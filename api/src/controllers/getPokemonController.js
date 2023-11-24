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
                image: data.sprites.front_default
            };
            return pokemon;
        }
    } else {
        const limit = 100;
        const offset = 0;
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        const character = data.results.map((e) => ({
            name: e.name,
            url: e.url
        }));
        return character;
    };
};

module.exports = {
    getPokemonController
};

