import { Request, Response } from 'express';
import { IMotorService } from '../interfaces/IMotorService';
import { IMotorcycle } from '../interfaces/IMotorcycle';

export default class MotorcycleController {
  constructor(private _service: IMotorService<IMotorcycle>) {}
  
  // cadastrar uma nova moto status http
  public async create(req: Request, res: Response<IMotorcycle>) {
    const result = await this._service.create(req.body);
    return res.status(201).json(result);
  }

  // listar todas as motos registradas
  public async read(_req: Request, res: Response<IMotorcycle[]>) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }

  // possível listar uma única moto através do seu id
  public async readOne(req: Request, res: Response<IMotorcycle>) {
    const result = await this._service.readOne(req.params.id);
    return res.status(200).json(result);
  }

  // atualizar determinado veículo do tipo moto que possua o id passado como parâmetro na rota.
  public async update(req: Request, res: Response<IMotorcycle>) {
    const result = await this._service.update(req.params.id, req.body);
    return res.status(200).json(result);
  }
}