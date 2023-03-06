import { Request, Response } from 'express';
import ILeaderBoardService from '../interfaces/serviceInterfaces/ILeaderBoardService';

export default class LeaderBoardController {
  private readonly _service: ILeaderBoardService;

  constructor(service: ILeaderBoardService) {
    this._service = service;
  }

  async getAll(_req: Request, res: Response) {
    const result = await this._service.getAll();
    return res.status(200).json(result);
  }
}
