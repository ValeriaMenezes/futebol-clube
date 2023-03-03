import MatchesModel from '../database/models/MatchesModel';

export interface IMatches extends MatchesModel {
  homeTeam?: object,
  awayTeam?: object,
}
