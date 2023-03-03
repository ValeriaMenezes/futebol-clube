// import { IMatches } from '../IMatches';
import Matches from '../../database/models/MatchesModel';

export interface IMatchesService {
  getMatches(): Promise<Matches[]>,
  getMatchesInProgress(progressStatus: boolean): Promise<Matches[]>,
}
