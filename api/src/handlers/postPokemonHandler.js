const {createPokemonController} = require('../controllers/createPokemonController');

const postPokemonHandler = async (req, res) => {
    try{ 
        const { name, image, hp, attack, defense, speed, types, height, weight } = req.body;
        console.log(name, image, hp, attack, defense, speed, types, height, weight);
        const response = await createPokemonController(name, image, hp, attack, defense, speed, types, height, weight);

        return res.status(200).json(response);

    } catch (error) {
        return res.status(400).json({error: error.message});
    };
};

module.exports = {
    postPokemonHandler
};