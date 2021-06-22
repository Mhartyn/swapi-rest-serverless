'use strict'

const AWS = require('aws-sdk');
const uuid = require('uuid');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.createData = (event, context, callback) => {

    const datetime = new Date().toISOString();
    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Item: {
            id: uuid.v1(),
            titulo: data.titulo,
            episodio: data.episodio,
            descripcion: data.descripcion,
            director: data.director,
            productor: data.productor,
            fecha_lanzamiento: data.fecha_lanzamiento,           
            createdAt: datetime,
            updatedAt: datetime
        }
    };

    dynamoDb.put(params, error => {
       if (error) {
         console.error(error);
   
         callback(null, {
           statusCode: error.statusCode || 501
         });
         return;
       }
   
       callback(null, {
         statusCode: 200,
         body: JSON.stringify(params.Item)
       });
     });

}