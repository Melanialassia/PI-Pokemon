const axios = require("axios");
const { Pokemon } = require('../db');

const getAllPokemon = async (req, res) => {
    try {
        const { name } = req.query;

        if (name) {
            const nameToLowerCase = name.toLowerCase();

            const pokemonDB = await Pokemon.findOne({ where: { name } });

            if (pokemonDB) { return res.status(200).json(pokemonDB) };

            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nameToLowerCase}`);

            if (data) {
                const pokemons = {
                    id: data.id,
                    name: data.name,
                    image: data.sprites.front_default
                };

                return res.status(200).json(pokemons);

            } else {
                return res.status(404).json({ error: 'Pokemon not found' });
            };

        } else {

            const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');
            const character = data.results.map((element) => ({name: element.name}));

            return res.status(200).json(character);
        }

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllPokemon
};
