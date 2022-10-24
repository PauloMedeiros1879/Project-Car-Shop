import { expect } from 'chai';
import sinon from 'sinon';
import CarModel from '../../../models/CarModel';
import { Model } from 'mongoose';
import { carMock, carMockId } from '../mocks/carMock';

describe('Car Model testes', () => {
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
});