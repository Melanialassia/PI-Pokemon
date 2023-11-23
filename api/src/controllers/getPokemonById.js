const axios = require("axios");
const { Pokemon } = require('../db');

const getPokemonById = async (req, res) => {
    try {
        const { id } = req.params;
        const pokemonDB = await Pokemon.findOne({ where: { id } });
        
        if (pokemonDB) {
            return res.status(200).json(pokemonDB);
        };
        
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

        if (data.id) {
            const pokemon = {
                id: data.id,
                name: data.name,
                image: data.sprites.front_default,
                hp: data.stats.find((p) => p.stat.name === 'hp').base_stat,
                attack: data.stats.find((p) => p.stat.name === 'attack').base_stat,
                defense: data.stats.find((p) => p.stat.name === 'defense').base_stat,
                speed: data.stats.find((p) => p.stat.name === 'speed').base_stat,
                types: data.types.map((p) => p.type.name),
                height: data.height,
                weight: data.weight
            };

            await Pokemon.create(pokemon);
            return res.status(200).json(pokemon);
        };

        return res.status(400).json({ error: 'Pokemon not found' });

    } catch (error) {
        return res.status(500).json(error.message);
    };
};

module.exports = {
    getPokemonById
};