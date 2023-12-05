const { Pokemon, Types } = require('../db');

const createPokemonController = async (
  name,
  image,
  hp,
  attack,
  defense,
  speed = null,
  height = null,
  weight = null,
  createPokemonDb,
  types
) => {
  const [pokemon, created] = await Pokemon.findOrCreate({
    where: { name },
    defaults: {
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      createPokemonDb,
    },
  });
  if (!created) throw new Error("Este pokemon ya existe en la DB");
  const typesDb = await Types.findAll({ where: { name: types } });

  pokemon.addTypes(typesDb);

  return pokemon;
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