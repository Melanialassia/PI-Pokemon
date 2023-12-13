const { Pokemon, Types } = require('../db');

const createPokemonController = async (
  name,
  types,
  image,
  hp,
  attack,
  defense,
  speed = null,
  height = null,
  weight = null
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
      weight
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
  // "name": "gg",
  // "types": [
  //   "psychic",
  //   "dark"
  // ],
  // "image": "https://w7.pngwing.com/pngs/678/671/png-transparent-pokemon-go-pokemon-red-and-blue-eevee-pokedex-pokemon-go-mammal-carnivoran-dog-like-mammal-thumbnail.png",
  // "hp": 23,
  // "attack": 23,
  // "defense": 23,
  // "speed": 23,
  // "height": 23,
  // "weight": 23
// }