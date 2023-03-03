import { ModelStatic } from 'sequelize';
import Teams from '../database/models/TeamsModel';
import Matches from '../database/models/MatchesModel';
// import { IMatches } from '../interfaces/IMatches';
import { INewMatche } from '../interfaces/INewMatche';
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

  async matchesUpdated(id: number, homeTeamGoals: number, awayTeamGoals: number) {
    await this.model.update(
      { homeTeamGoals, awayTeamGoals },
      { where: { id } },
    );
  }

  async newMatche(newMatche: INewMatche): Promise<Matches> {
    const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = newMatche;

    const creteNewMatche = await this.model.create({
      homeTeamId,
      awayTeamId,
      homeTeamGoals,
      awayTeamGoals,
      inProgress: true,
    });

    return creteNewMatche;
  }
}
