const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { postPokemonHandler } = require('../handlers/postPokemonHandler');
const {getPokemonHandler} = require('../handlers/getPokemonHandler');
const { getPokemonIdHandler } = require('../handlers/getPokemonIdHandler');
const { getTypesHandler} = require('../handlers/getTypesHandler');


const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons',  getPokemonHandler);

router.get('/pokemons/:id', getPokemonIdHandler);

router.post('/pokemons', postPokemonHandler);

router.get('/types', getTypesHandler);


module.exports = router;

