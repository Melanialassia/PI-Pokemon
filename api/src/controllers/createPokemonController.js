const { Pokemon, Types } = require('../db');

const createPokemonController = async (name, image, hp, attack, defense, speed, types, height, weight) => {
    //Creamos el pokemon
    const newPokemon = await Pokemon.create({ name, image, hp, attack, defense, speed, height, types, weight });
    //buscamos el type en nuestro modelo TYPES
    const typesBD = await Types.findAll({ where: { name: types } });
    //asociamos los types con el nuevo pokemon
    await newPokemon.addTypes(typesBD);

    return newPokemon;

};

module.exports = {
    createPokemonController
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