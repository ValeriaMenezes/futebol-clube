import ITeams from '../ITeams';

interface ITeamsService {
  getAll(): Promise<ITeams[]>,
  getById(id: number): Promise<ITeams>,
}

export default ITeamsService;
