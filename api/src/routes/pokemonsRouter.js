const {Router} = require("express");
const router = Router();
const { postPokemonHandler } = require('../handlers/postPokemonHandler');
const {getPokemonHandler} = require('../handlers/getPokemonHandler');
const { getPokemonIdHandler } = require('../handlers/getPokemonIdHandler');

router.get('/',  getPokemonHandler);

router.get('/pokemons/:id', getPokemonIdHandler);

router.post('/create', postPokemonHandler);

module.exports = router;