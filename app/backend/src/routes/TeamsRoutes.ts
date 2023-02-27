import { Router, Request, Response } from 'express';
import TeamsController from '../controllers/TeamsController';
import TeamsService from '../services/TeamsService';

const teamsRoutes = Router();
const teamsService = new TeamsService();
const teamsController = new TeamsController(teamsService);

teamsRoutes.get('/teams', (req: Request, res: Response) => teamsController.getAll(req, res));

export default teamsRoutes;
