import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import { ErrorTypes } from '../../../middlewares/errorTypes';
import {
  carMock,
  carMockId,
} from '../../unit/mocks/carMock';

describe('Car Service testes', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(() => {
    sinon.stub(carModel, 'create').resolves(carMockId);
    sinon
      .stub(carModel, 'readOne')
      .onCall(0)
      .resolves(carMockId)
      .onCall(1)
      .resolves(null);
    sinon.stub(carModel, 'read').resolves([carMockId]);
  });

  after(() => sinon.restore());

  describe('Create Car', () => {
    it('Sucesso', async () => {
      const carCreated = await carService.create(carMock);
      expect(carCreated).to.be.deep.equal(carMockId);
    });

    it('Falha', async () => {
      let error;
      try {
        await carService.create({});
      } catch (err) {
        error = err;
      }
      expect(error).to.be.instanceOf(ZodError);
    });
  });

  describe('ReadOne Car', () => {
    it('Sucesso', async () => {
      const carCreated = await carService.readOne(carMockId._id);
      expect(carCreated).to.be.deep.equal(carMockId);
    });

    it('Falha', async () => {
      let error;
      try {
        await carService.readOne(carMockId._id);
      } catch (err: any) {
        error = err;
      }
      expect(error, 'error should be defined');
      expect(error.message).equal(ErrorTypes.EntityNotFound);
    });
  });

  describe('Read Cars', () => {
    it('Sucesso', async () => {
      const carArray = await carService.read();
      expect(carArray).to.be.deep.equal([carMockId]);
    });
  });
});