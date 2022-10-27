import { IMotorService } from '../interfaces/IMotorService';
import { MotorZodSchema, IMotorcycle } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../middlewares/errorTypes';

export default class MotorcycleService implements IMotorService<IMotorcycle> {
  private _motor: IModel<IMotorcycle>;

  constructor(model: IModel<IMotorcycle>) {
    this._motor = model;
  }
  
  // cadastrar uma nova moto
  public async create(obj: unknown): Promise<IMotorcycle> {
    const parsed = MotorZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    return this._motor.create(parsed.data);
  }

  //  listar todas as motos registradas
  public async read(): Promise<IMotorcycle[]> {
    const motorcycles = await this._motor.read();
    return motorcycles;
  }

  // possível listar uma única moto através do seu id
  public async readOne(_id: string): Promise<IMotorcycle> {
    const motor = await this._motor.readOne(_id);
    if (!motor) throw new Error(ErrorTypes.EntityNotFound);
    return motor;
  }
}