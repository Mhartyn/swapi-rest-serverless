'use strict'

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.deleteData = (event, context, callback) => {

    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Key: {
            id: event.pathParameters.id
        }
    };

    dynamoDb.delete(params, error => {
        if(error) {
            console.error(error);

            callback(null, {
                statusCode: error.statusCode || 501
              });
              return;
        }

        callback(null, {
            statusCode: 200,
            body: JSON.stringify({})
          });

    });
}