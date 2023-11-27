const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routerPokemons = require("./pokemonsRouter")
const routerTypes = require("./typesRouter");


const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/pokemons", routerPokemons);

router.get("/types", routerTypes);


module.exports = router;

