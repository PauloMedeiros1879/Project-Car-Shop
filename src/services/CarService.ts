import { IService } from '../interfaces/IService';
import { CarZodSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';

export default class CarService implements IService<ICar> {
  private _car: IModel<ICar>;

  constructor(model: IModel<ICar>) {
    this._car = model;
  }

  public async create(obj: unknown): Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    return this._car.create(parsed.data);
  }

  public async read(): Promise<ICar[]> {
    const cars = await this._car.read();
    return cars;
  }

  public async readOne(_id: string): Promise<ICar> {
    const car = await this._car.readOne(_id);
    if (!car) throw new Error('InvalidMongoId');
    return car;
  }

  public async update(_id: string, obj: unknown): Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    const carUpdate = await this._car.update(_id, parsed.data);
    if (!carUpdate) throw new Error('InvalidMongoId');
    return carUpdate;
  }

  public async delete(_id: string): Promise<ICar> {
    const car = await this._car.delete(_id);
    if (!car) throw new Error('InvalidMongoId');
    return car;
  }
}