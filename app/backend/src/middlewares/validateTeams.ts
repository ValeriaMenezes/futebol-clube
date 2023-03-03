import { RequestHandler } from 'express';
import TeamsService from '../services/TeamsService';
// import Teams from '../database/models/TeamsModel';

const teamsService = new TeamsService();

export const validateTeamName: RequestHandler = async (req, res, next) => {
  const { homeTeamId, awayTeamId } = req.body;

  if (homeTeamId === awayTeamId) {
    return res.status(422)
      .json({ message: 'It is not possible to create a match with two equal teams' });
  }

  next();
};

export const validateTeam: RequestHandler = async (req, res, next) => {
  const { homeTeamId, awayTeamId } = req.body;

  const getTeams = await teamsService.getAll();
  const filterTeams = getTeams.filter((team) => homeTeamId === team.id || awayTeamId === team.id);
  console.log('filterTeams ----->', filterTeams);
  if (filterTeams.length !== 2) {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }
  next();
};
