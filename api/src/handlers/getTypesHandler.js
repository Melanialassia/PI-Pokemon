const { getTypesController } = require('../controllers/getTypesController');

const getTypesHandler = async (req, res) => {
    try {
        await getTypesController();
        return res.status(200).send('Los tipos de pokémons se guardaron correctamente en la base de datos');
    } catch (error) {
        return res.status(400).json({ error: error.message });
    };
};

module.exports = {
    getTypesHandler
};