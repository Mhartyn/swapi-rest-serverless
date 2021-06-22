'use strict'

const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.updateData = (event, context, callback) => {

    const datetime = new Date().toISOString();
    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Key: {
          id: event.pathParameters.id
        },
        ExpressionAttributeValues: {
          ":titulo": data.titulo,
          ":episodio": data.episodio,
          ":descripcion": data.descripcion,
          ":director": data.director,
          ":productor": data.productor,
          ":fecha_lanzamiento": data.fecha_lanzamiento,
          ":updatedAt": datetime
        },
        UpdateExpression:
          "SET titulo = :titulo, episodio = :episodio, descripcion = :descripcion, director = :director, productor = :productor, fecha_lanzamiento = :fecha_lanzamiento, updatedAt = :updatedAt",
        ReturnValues: "ALL_NEW"
    };

    dynamoDb.update(params, (error, result) => {
        if(error) {
            console.error(error);

            callback(null, {
                statusCode: error.statusCode || 501
            });
            return;
        }

        callback(null, {
            statusCode: 200,
            body: JSON.stringify(result.Attributes)
          });
    });
}