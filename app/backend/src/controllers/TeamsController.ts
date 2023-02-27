import { Request, Response } from 'express';
import ITeamsService from '../interfaces/serviceInterfaces/ITeamsService';

export default class TeamsController {
  private _service: ITeamsService;

  constructor(service: ITeamsService) {
    this._service = service;
  }

  async getAll(_req: Request, res: Response) {
    const allTeams = await this._service.getAll();
    return res.status(200).json(allTeams);
  }
}
