import { Request, Response } from 'express';
import { IMatchesService } from '../interfaces/serviceInterfaces/IMatchesSevice';

export default class MatchesController {
  private readonly _service: IMatchesService;

  constructor(service: IMatchesService) {
    this._service = service;
  }

  async getAll(_req: Request, res: Response) {
    const allMatches = await this._service.getMatches();
    return res.status(200).json(allMatches);
  }
}
