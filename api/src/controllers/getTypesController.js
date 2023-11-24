const axios = require("axios");
const { Types } = require('../db');

const getTypesController = async () => {
   // Contamos las propiedades que tiene la tabla
   const verificate = await Types.count()

   // si se encuentra vacia entra al condicional
   if (verificate === 0) {
      const { data } = await axios.get('https://pokeapi.co/api/v2/type');
      const typesApi = data.results.map((e) => ({ name: e.name }));
      // mapea los resultados de la api para luego crear un nuevo array con los objetos dentro

      await Types.bulkCreate(typesApi); // agregamos el array de objetos a nuestra API
      return typesApi;
   } else {
      return 'Los tipos de pokémons ya existen en la base de datos.'
   }
};

module.exports = {
   getTypesController
};
