import { Router, Request, Response } from 'express';
import TeamsController from '../controllers/TeamsController';
import TeamsService from '../services/TeamsService';
import LoginController from '../controllers/LoginController';
import LoginService from '../services/LoginService';
import validateEmail from '../middlewares/validateEmail';
import validatePassword from '../middlewares/validatePassword';
import authenticateToken from '../middlewares/authenticateToken';

const routes = Router();
const teamsService = new TeamsService();
const teamsController = new TeamsController(teamsService);
const loginService = new LoginService();
const loginController = new LoginController(loginService);

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

export default routes;
