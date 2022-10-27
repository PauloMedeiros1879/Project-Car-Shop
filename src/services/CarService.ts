import { IService } from '../interfaces/IService';
import { CarZodSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../middlewares/errorTypes';

export default class CarService implements IService<ICar> {
  private _car: IModel<ICar>;

  constructor(model: IModel<ICar>) {
    this._car = model;
  }

  // cadastrar um novo carro
  public async create(obj: unknown): Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    return this._car.create(parsed.data);
  }

  // receber todos os veículos do tipo carro registrados no banco de dados
  public async read(): Promise<ICar[]> {
    const cars = await this._car.read();
    return cars;
  }

  // possível listar um único carro através do seu id
  public async readOne(_id: string): Promise<ICar> {
    const car = await this._car.readOne(_id);
    if (!car) throw new Error(ErrorTypes.EntityNotFound);
    return car;
  }

  // possível atualizar o registro de um carro através do seu id
  public async update(_id: string, obj: unknown): Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    const carUpdate = await this._car.update(_id, parsed.data);
    if (!carUpdate) throw new Error(ErrorTypes.EntityNotFound);
    return carUpdate;
  }

  // excluir determinado veículo do tipo carro que possua o id passado como parâmetro na rota
  public async delete(_id: string): Promise<ICar> {
    const car = await this._car.delete(_id);
    if (!car) throw new Error(ErrorTypes.EntityNotFound);
    return car;
  }
}