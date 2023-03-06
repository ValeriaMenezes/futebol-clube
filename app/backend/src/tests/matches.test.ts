import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import MatchesModel from '../database/models/MatchesModel';
import { IMatches } from '../interfaces/IMatches';
// import { Response } from 'superagent';
import { allMatches } from './mocks'

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando login matches', function () {
  
  afterEach(function () {
    sinon.restore();
  });

  it('Testando ao fazer uma requisição com sucesso', async function() {
    sinon.stub(MatchesModel, 'findAll').resolves(allMatches as unknown as IMatches[]);

    const chaiHttpResponse = await chai
    .request(app)
    .get('/matches');

    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(allMatches);
  });
});