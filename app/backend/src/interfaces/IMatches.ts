import MatchesModel from '../database/models/MatchesModel';

export interface IMatches extends MatchesModel {
  homeTeamA?: object,
  awayTeamA?: object,
}
