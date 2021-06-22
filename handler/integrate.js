'use strict'

const axios = require('axios').default;

module.exports.integrateSwapi = (event, context, callback) => {

    axios.get('https://swapi.py4e.com/api/films')
    .then((response) => {

      var data = response.data.results;
      let lista = [];      

      for (var atr in data) {

        let objToString = data[atr].opening_crawl;
        
        var obj = { 
            titulo: data[atr].title,
            episodio: data[atr].episode_id,
            descripcion: objToString.replace(/\r?\n|\r/g, " "),
            director: data[atr].director,
            productor: data[atr].producer,
            fecha_lanzamiento: data[atr].release_date 
        };
        lista.push(obj);       
       }

      callback(null, {
        statusCode: 200,
        body: JSON.stringify(lista)
      });   

    })
    .catch((error) => {
      console.error(error);
        callback(null, {
             statusCode: error.statusCode || 501
        });             
      return;      
    })    
}