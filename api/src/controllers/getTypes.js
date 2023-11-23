const axios = require("axios");
const { Types } = require('../db');

const getTypes = async (req, res) => {
try {
          // Contamos las propiedades que tiene la tabla
             const verificate = await Types.count()
    
            // si se encuentra vacia entra al condicional
             if (verificate === 0) {
                const { data } = await axios.get('https://pokeapi.co/api/v2/type');
              const typesApi = data.results.map((e) => ({ name: e.name }));
           // mapea los resultados de la api para luego crear un nuevo array con los objetos dentro
    
                await Types.bulkCreate(typesApi); // agregamos el array de objetos a nuestra API
                return res.status(200).json(typesApi);
    
             } else {
               return res.status(204).json({ message: 'The types already exist in the database.' });
     }
    
          } catch (error) {
            return res.status(500).json(error.message);
         };
};

module.exports = {
    getTypes
};
