import { ICar } from '../../../interfaces/ICar';

export const carMock: ICar = {
  model: 'Palio',
  year: 2011,
  color: 'Preto',
  status: true,
  buyValue: 1000,
  doorsQty: 4,
  seatsQty: 5,
};

export const carMockId: ICar & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  model: 'Palio',
  year: 2011,
  color: 'Preto',
  status: true,
  buyValue: 1000,
  doorsQty: 4,
  seatsQty: 5,
};

export const carMockIdUpdated: ICar & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  model: 'Palio',
  year: 2011,
  color: 'Preto',
  status: true,
  buyValue: 1000,
  doorsQty: 4,
  seatsQty: 5,
};