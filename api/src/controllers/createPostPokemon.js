const { Pokemon, Types } = require('../db');

const createPostPokemon = async (req, res) => {
    try {
        const { name, image, hp, attack, defense, speed, types, height, weight } = req.body;

        if (!types || types.length < 2) {
            return res.status(400).json({ error: 'You must provide at least two types for the Pokémon.' });
        }
        //creamos el pokemon en nuestra base de datos
        const newPokemon = await Pokemon.create({ name, image, hp, attack, defense, speed, height, weight });

        //buscamos el type en nuestro modelo TYPES
        const typesBD = await Types.findAll({ where: { name: types } });
        //asociamos los types con el nuevo pokemon
        await newPokemon.addTypes(typesBD);

        return res.status(200).send(`El pokémon ${name} fue creado correctamente`);

    } catch (error) {
        return res.status(400).json(error.message);
    };
};

module.exports = {
    createPostPokemon
};
// {
//     "name" : "Melani",
//     "image" : "https://pokeapi.co/api/v2/pokemon-species/132/",
//     "hp": 200,
//     "attack": 300,
//     "defense": 400,
//     "speed":34,
//     "height": 499,
//     "weight": 6
//   }