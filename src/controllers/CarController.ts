import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

export default class CarController {
  constructor(private _service: IService<ICar>) {}

  //  cadastrar um novo carro
  public async create(req: Request, res: Response<ICar>) {
    const result = await this._service.create(req.body);
    return res.status(201).json(result);
  }

  // receber todos os veículos do tipo carro registrados no banco de dados
  public async read(_req: Request, res: Response<ICar[]>) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }

  // possível listar um único carro através do seu id
  public async readOne(req: Request, res: Response<ICar>) {
    const result = await this._service.readOne(req.params.id);
    return res.status(200).json(result);
  }

  // possível atualizar o registro de um carro através do seu id
  public async update(req: Request, res: Response<ICar>) {
    const result = await this._service.update(req.params.id, req.body);
    return res.status(200).json(result);
  }

  // excluir determinado veículo do tipo carro que possua o id passado como parâmetro na rota
  public async delete(req: Request, res: Response<ICar>) {
    const result = await this._service.delete(req.params.id);
    return res.status(204).json(result);
  }
}