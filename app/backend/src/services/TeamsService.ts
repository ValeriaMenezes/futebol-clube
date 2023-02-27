import { ModelStatic } from 'sequelize';
// import ITeams from 'src/interfaces/ITeams';
import ITeamsService from '../interfaces/serviceInterfaces/ITeamsService';
import Teams from '../database/models/TeamsModel';

export default class TeamsService implements ITeamsService {
  protected model: ModelStatic<Teams> = Teams;

  async getAll(): Promise<Teams[]> {
    const allTeams = await this.model.findAll();
    return allTeams;
  }
}
