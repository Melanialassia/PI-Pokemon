const { getPokemonController } = require("./getPokemonController");

const getPokemonIdController = async (id) => {

    const allPokemons = await getPokemonController();
    const pokemonId= await allPokemons.filter((e) => e.id == id);

    if(pokemonId){
        return pokemonId;
    }
    // const pokemonDB = await Pokemon.findOne({
    //     where: { id },
    //     include: 'types'
    // });
    // if (pokemonDB) {
    //     return pokemonDB;
    // } else {
    //     const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    //     const pokemon = {
    //         id: data.id,
    //         name: data.name,
    //         image: data.sprites.front_default,
    //         hp: data.stats[0].base_stat,
    //         attack: data.stats[1].base_stat,
    //         defense: data.stats[2].base_stat,
    //         types: data.types.map((p) => p.type.name),
    //         speed: data.stats[5].base_stat,
    //         height: data.height,
    //         weight: data.weight
    //     };
    //     const typesBD = await pokemon.types.findAll({ where: { name: name} });

    //     // relacionamos los pokemons con los types en la tabla intermedia
    //     await pokemon.addTypes(typesBD);
    
    //     return pokemon;
    // };
};

module.exports = {
    getPokemonIdController
};