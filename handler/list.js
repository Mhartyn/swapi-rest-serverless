'use strict'

const AWS = require('aws-sdk');
const uuid = require('uuid');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.listData = (event, context, callback) => {

    const params = {
        TableName: process.env.DYNAMODB_TABLE
    };

    dynamoDb.scan(params, (error, data) => {
        if(error) {
            console.error(error);
                         
            callback(null, {
               statusCode: error.statusCode || 501
           });             
            return;
        }   

        callback(null, {
           statusCode: 200,
           body: JSON.stringify(data.Items)
       });

    });

}