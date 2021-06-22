'use strict';

// Tests for Endpoints

let AWS = require('aws-sdk');
AWS.config.update({region:'us-east-2'});

const mochaPlugin = require('serverless-mocha-plugin');
const expect = mochaPlugin.chai.expect;
let getSwapi = mochaPlugin.getWrapper('SWAPI Integration', '/handler/integrate.js', 'integrateSwapi');
let listData = mochaPlugin.getWrapper('Get listData', '/handler/list.js', 'listData');

describe('GET /integrate_swapi', () => {
  before((done) => {
    done();
  });

  it('Respond with status code and no empty', async () => {    
    return getSwapi.run({}).then((response) => {
      let body = JSON.parse(response.body); 
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.not.be.empty;         

    });      
  });
});

describe('GET /list', () => {
  before((done) => {
    done();
  });

  it('Respond with status code and no empty', async () => {        
    return listData.run({}).then((response) => {            
      let body = JSON.parse(response.body);
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.not.be.empty;

    });      
  });
});

