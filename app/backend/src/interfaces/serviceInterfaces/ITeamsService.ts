import ITeams from '../ITeams';

interface ITeamsService {
  getAll(): Promise<ITeams[]>,
}

export default ITeamsService;
