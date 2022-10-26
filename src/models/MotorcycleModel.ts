import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoModel from './MongoModel';

const motorcycleMongooseSchema = new Schema<IMotorcycle>(
  {
    model: String,
    year: Number,
    color: String,
    status: { type: Boolean, required: false },
    buyValue: Number,
    category: Number,
    engineCapacity: Number,
  },
  { versionKey: false },
);

export default class MotorcycleModel extends MongoModel<IMotorcycle> {
  constructor(model = mongooseCreateModel('Motorcycle', motorcycleMongooseSchema)) {
    super(model);
  }
}