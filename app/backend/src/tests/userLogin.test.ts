import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import UserModel from '../database/models/UsersModel';

// import { Response } from 'superagent';
import { userToken } from './mocks'

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando login de usuário', function () {
  
  afterEach(function () {
    sinon.restore();
  });

  it('Testando se é possível fazer login', async function () {
    sinon.stub(UserModel, 'findOne').resolves(userToken as UserModel);

    const chaiHttpResponse = await chai
    .request(app)
    .post('/login')
    .send({ email: 'user@user.com', password: '123456' });

    expect(chaiHttpResponse.status).to.equal(200);
  })

  it('Testando que não é possível fazer login sem informar email', async function () {
    sinon.stub(UserModel, 'findOne').resolves(userToken as UserModel);

    const chaiHttpResponse = await chai
    .request(app)
    .post('/login')
    .send({ email: '', password: '123456' });

    expect(chaiHttpResponse.status).to.equal(400);
    expect(chaiHttpResponse.body.message).to.deep.equal('All fields must be filled');
  })

  it('Testando que não é possível fazer login sem informar senha', async function () {
    sinon.stub(UserModel, 'findOne').resolves(userToken as UserModel);

    const chaiHttpResponse = await chai
    .request(app)
    .post('/login')
    .send({ email: 'user@user.com', password: '' });

    expect(chaiHttpResponse.status).to.equal(400);
    expect(chaiHttpResponse.body.message).to.deep.equal('All fields must be filled');
  })

  it('Testando que não é possível fazer login com email inválido', async function () {
    sinon.stub(UserModel, 'findOne').resolves(userToken as UserModel);

    const chaiHttpResponse = await chai
    .request(app)
    .post('/login')
    .send({ email: 'user.com', password: '123456' });

    expect(chaiHttpResponse.status).to.equal(401);
    expect(chaiHttpResponse.body.message).to.deep.equal('Invalid email or password');
  })

  it('Testando que não é possível fazer login com senha inválida', async function () {
    sinon.stub(UserModel, 'findOne').resolves(userToken as UserModel);

    const chaiHttpResponse = await chai
    .request(app)
    .post('/login')
    .send({ email: 'user@user.com', password: '123' });

    expect(chaiHttpResponse.status).to.equal(401);
    expect(chaiHttpResponse.body.message).to.deep.equal('Invalid email or password');
  })
});