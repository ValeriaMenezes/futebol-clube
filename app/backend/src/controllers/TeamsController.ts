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

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    console.log('id ---->', id);
    const team = await this._service.getById(Number(id));
    console.log('team ----->', team);
    return res.status(200).json(team);
  }
}
