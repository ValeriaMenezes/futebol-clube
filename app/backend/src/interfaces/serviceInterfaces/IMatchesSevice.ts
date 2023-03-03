// import { IMatches } from '../IMatches';
import Matches from '../../database/models/MatchesModel';

export interface IMatchesService {
  getMatches(): Promise<Matches[]>,
  getMatchesInProgress(progressStatus: boolean): Promise<Matches[]>,
  matchesFinished(id: number): Promise<object>
  matchesUpdated(id: number, homeTeamGoals: number, awayTeamGoals: number): Promise<void | object>
}
