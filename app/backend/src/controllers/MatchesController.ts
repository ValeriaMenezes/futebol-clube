import { Request, Response } from 'express';
import { IMatchesService } from '../interfaces/serviceInterfaces/IMatchesSevice';

// https://pt.stackoverflow.com/questions/235272/como-converter-uma-string-em-booleano

export default class MatchesController {
  private readonly _service: IMatchesService;

  constructor(service: IMatchesService) {
    this._service = service;
  }

  async getAll(req: Request, res: Response) {
    const { inProgress } = req.query;
    let allMatches;
    if (!inProgress) {
      allMatches = await this._service.getMatches();
    } else {
      const parseBool = Boolean(inProgress === 'true');
      allMatches = await this._service.getMatchesInProgress(parseBool);
    }
    return res.status(200).json(allMatches);
  }

  async matchesFinished(req: Request, res: Response) {
    const { id } = req.params;

    const result = await this._service.matchesFinished(Number(id));
    return res.status(200).json(result);
  }
}
