import { IMotorService } from '../interfaces/IMotorService';
import { MotorZodSchema, IMotorcycle } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';

export default class MotorcycleService implements IMotorService<IMotorcycle> {
  private _motor: IModel<IMotorcycle>;

  constructor(model: IModel<IMotorcycle>) {
    this._motor = model;
  }
 
  public async create(obj: unknown): Promise<IMotorcycle> {
    const parsed = MotorZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    return this._motor.create(parsed.data);
  }
}