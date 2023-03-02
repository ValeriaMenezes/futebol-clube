import { Request, Response } from 'express';
import ILoginService from '../interfaces/serviceInterfaces/ILoginService';

export default class LoginController {
  private _service: ILoginService;

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
}
