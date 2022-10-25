import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import {
  carMock,
  carMockId,
  carMockIdUpdated,
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
    sinon
      .stub(carModel, 'delete')
      .onCall(0)
      .resolves(carMockId)
      .onCall(1)
      .resolves(null);
    sinon
      .stub(carModel, 'update')
      .onCall(0)
      .resolves(carMockIdUpdated)
      .onCall(1)
      .resolves(null)
      .onCall(2)
      .resolves(null);
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
});