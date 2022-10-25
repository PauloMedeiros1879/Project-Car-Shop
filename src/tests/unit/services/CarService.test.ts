import * as sinon from 'sinon';
import CarModel from '../../../models/CarModel';
import {
  carMockId,
  carMockIdUpdated,
} from '../../unit/mocks/carMock';

describe('Car Service testes', () => {
  const carModel = new CarModel();

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

});