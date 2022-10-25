import { expect } from 'chai';
import sinon from 'sinon';
import CarModel from '../../../models/CarModel';
import { Model } from 'mongoose';
import { carMock, carMockId } from '../mocks/carMock';
import { ErrorTypes } from '../../../middlewares/errorTypes';

describe('Car Model tests', () => {
  const carsModel = new CarModel();

  before(() => {
    sinon.stub(Model, 'create').resolves(carMockId);
    sinon.stub(Model, 'findOne').resolves(carMockId);
    sinon.stub(Model, 'find').resolves([carMockId]);
  });

  after(() => sinon.restore());

  describe('Criando um carro novo', () => {
    it('Criado com sucesso', async () => {
      const newCar = await carsModel.create(carMock);
      expect(newCar).to.be.deep.equal(carMockId);
    });
  });

  describe('Procurando um carro', () => {
    it('successfully found', async () => {
      const carFound = await carsModel.readOne('62cf1fc6498565d94eba52cd');
      expect(carFound).to.be.deep.equal(carMockId);
    });

    it('_id não encontrado', async () => {
      try {
        await carsModel.readOne('123ERRADO');
      } catch (error: any) {
        expect(error.message).to.be.eq(ErrorTypes.InvalidMongoId);
      }
    });
  });
});