const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getAllPokemon } = require('../controllers/getAllPokemon');
const { getPokemonById } = require('../controllers/getPokemonById');
const { createPostPokemon } = require('../controllers/createPostPokemon');
const { getTypes } = require('../controllers/getTypes');


const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons', getAllPokemon);

router.get('/pokemons/:id', getPokemonById);

router.post('/pokemons', createPostPokemon);

router.get('/types', getTypes);


module.exports = router;

