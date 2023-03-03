import { ModelStatic } from 'sequelize';
import Teams from '../database/models/TeamsModel';
import Matches from '../database/models/MatchesModel';
// import { IMatches } from '../interfaces/IMatches';
import { IMatchesService } from '../interfaces/serviceInterfaces/IMatchesSevice';

export default class MatchesService implements IMatchesService {
  protected model: ModelStatic<Matches> = Matches;

  async getMatches(): Promise<Matches[]> {
    const allMatches = await this.model.findAll({
      include: [
        { model: Teams, as: 'homeTeam', attributes: ['teamName'] },
        { model: Teams, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });

    return allMatches;
  }

  async getMatchesInProgress(progressStatus: boolean): Promise<Matches[]> {
    const matchesProgress = await this.model.findAll({
      where: { inProgress: progressStatus },
      include: [
        { model: Teams, as: 'homeTeam', attributes: ['teamName'] },
        { model: Teams, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });

    return matchesProgress;
  }

  async matchesFinished(id: number): Promise<object> {
    await this.model.update(
      { inProgress: false },
      { where: { id } },
    );
    return { message: 'Finished' };
  }
}
