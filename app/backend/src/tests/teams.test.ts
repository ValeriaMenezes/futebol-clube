import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import TeamsModel from '../database/models/TeamsModel';

// import { Response } from 'superagent';
import { allTeams, teamById } from './mocks'

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando o endpoint /teams ao serem feitas requisições', function () {
  
  afterEach(function () {
    sinon.restore();
  });
  
  it('Testa se é possível buscar por todos os times', async function () {
    sinon.stub(TeamsModel, 'findAll').resolves(allTeams as TeamsModel[]);

    const chaiHttpResponse = await chai.request(app).get('/teams');

    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(allTeams);
  });

  it('Testa se é possível buscar por id do time', async function () {
    sinon.stub(TeamsModel, 'findByPk').resolves(teamById as TeamsModel);

    const chaiHttpResponse = await chai.request(app).get('/teams/1');
    
    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(teamById);
  });
});
