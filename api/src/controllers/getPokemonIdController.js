const { getPokemonController } = require("./getPokemonController");

const getPokemonIdController = async (id) => {
    const allPokemons = await getPokemonController();
    const pokemonId = await allPokemons.find((e) => e.id == id);

    if (pokemonId){
        console.log(pokemonId);
        return pokemonId;
    } else {
        throw Error (`No existe el pokémon con el ID: ${id}`);
    }
};

module.exports = {
    getPokemonIdController
};