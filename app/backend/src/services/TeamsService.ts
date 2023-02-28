import { ModelStatic } from 'sequelize';
// import ITeams from '../interfaces/ITeams';
import ITeamsService from '../interfaces/serviceInterfaces/ITeamsService';
import Teams from '../database/models/TeamsModel';

export default class TeamsService implements ITeamsService {
  protected model: ModelStatic<Teams> = Teams;

  async getAll(): Promise<Teams[]> {
    const allTeams = await this.model.findAll();
    return allTeams;
  }

  async getById(id: number): Promise<Teams> {
    // const idNumber = Number(id);
    const teamById = await this.model.findByPk(id);
    return teamById as Teams;
  }
}
