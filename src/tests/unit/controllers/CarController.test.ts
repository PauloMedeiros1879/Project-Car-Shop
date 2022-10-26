import { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import CarsModel from '../../../models/CarModel';
import CarsService from '../../../services/CarService';
import CarsController from '../../../controllers/CarController';
import {
  carMock,
  carMockId,
} from '../mocks/carMock';

describe('Testa o Car Controller testes', () => {
  const carModel = new CarsModel();
  const carService = new CarsService(carModel);
  const carController = new CarsController(carService);

  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(carService, 'create').resolves(carMockId);
    sinon.stub(carService, 'readOne').resolves(carMockId);
    sinon.stub(carService, 'read').resolves([carMockId]);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => sinon.restore());

  describe('Testa o Create() Cars', () => {
    it('Sucesso', async () => {
      req.body = carMock;
      await carController.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockId)).to.be
        .true;
    });
  });

  describe('Testa o ReadOne() Cars', () => {
    it('Sucesso', async () => {
      req.params = { id: carMockId._id };
      await carController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockId)).to.be
        .true;
    });
  });

  describe('Testa o Read() Cars', () => {
    it('Sucesso', async () => {
      await carController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([carMockId])).to.be
        .true;
    });
  });
});