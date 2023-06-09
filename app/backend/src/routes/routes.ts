import { Router, Request, Response } from 'express';
import TeamsController from '../controllers/TeamsController';
import TeamsService from '../services/TeamsService';
import LoginController from '../controllers/LoginController';
import LoginService from '../services/LoginService';
import validateEmail from '../middlewares/validateEmail';
import validatePassword from '../middlewares/validatePassword';
import authenticateToken from '../middlewares/authenticateToken';
import MatchesService from '../services/MatchesServices';
import MatchesController from '../controllers/MatchesController';
import { validateTeamName, validateTeam } from '../middlewares/validateTeams';
import LeaderBoardService from '../services/LeaderBoardService';
import LeaderBoardController from '../controllers/LeaderBoardController';

const routes = Router();
const teamsService = new TeamsService();
const teamsController = new TeamsController(teamsService);
const loginService = new LoginService();
const loginController = new LoginController(loginService);
const matchesService = new MatchesService();
const matchesController = new MatchesController(matchesService);
const leaderBoardService = new LeaderBoardService();
const leaderBoardController = new LeaderBoardController(leaderBoardService);

routes.post(
  '/login',
  validateEmail,
  validatePassword,
  (req: Request, res: Response) => loginController
    .connectUser(req, res),
);

routes.get(
  '/login/role',
  authenticateToken,
  (req: Request, res: Response) => loginController.getRole(req, res),
);

routes.get('/teams', (req: Request, res: Response) => teamsController.getAll(req, res));
routes.get('/teams/:id', (req: Request, res: Response) => teamsController.getById(req, res));

routes.get('/matches', (req: Request, res: Response) => matchesController.getAll(req, res));
routes.patch(
  '/matches/:id/finish',
  authenticateToken,
  (req: Request, res: Response) => matchesController.matchesFinished(req, res),
);

routes.patch(
  '/matches/:id',
  authenticateToken,
  (req: Request, res: Response) => matchesController.matchesUpdated(req, res),
);

routes.post(
  '/matches',
  authenticateToken,
  validateTeamName,
  validateTeam,
  (req: Request, res: Response) => matchesController.newMatche(req, res),
);

routes.get(
  '/leaderboard/home',
  (req: Request, res: Response) => leaderBoardController.getHome(req, res),
);

routes.get(
  '/leaderboard/away',
  (req: Request, res: Response) => leaderBoardController.getAway(req, res),
);

export default routes;
