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
}