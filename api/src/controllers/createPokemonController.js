const { Pokemon, Types } = require('../db');

const createPokemonController = async (name, image, hp, attack, defense, speed, types, height, weight) => {
    //Creamos el pokemon
    const [newPokemon, create] = await Pokemon.findOrCreate({
        where: { name },
        defaults:
        {
            name,
            image,
            hp,
            attack,
            defense,
            speed,
            height,
            weight
        }
    });
    if (!create) {
        throw Error("Este pokemon ya existe")
    }
    //buscamos el type en nuestro modelo TYPES
    const typesBD = await Types.findAll({ where: { name: types } });

    // relacionamos los pokemons con los types en la tabla intermedia
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
//      "types" : ["normal", "poison"]
//     "weight": 6
//   }