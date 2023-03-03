import { Request, Response } from 'express';
import ILoginService from '../interfaces/serviceInterfaces/ILoginService';
import StatusErrors from '../errors/statusErrors';

export default class LoginController {
  private readonly _service: ILoginService;

  constructor(service: ILoginService) {
    this._service = service;
  }

  async connectUser(req: Request, res: Response) {
    try {
      const token = await this._service.connectUser(req.body);
      return res.status(200).json({ token });
    } catch (err: any) {
      return res.status(err.status).json({ message: err.message });
    }
  }

  async getRole(req: Request, res: Response) {
    // console.log('req.headers --->', req.headers);

    const { userEmail, authorization } = req.headers;

    const role = await this._service.getRoleByToken(userEmail as string, authorization as string);
    if (!role) {
      throw new StatusErrors('Token must be a valid token');
    }
    return res.status(200).json(role);
  }
}
