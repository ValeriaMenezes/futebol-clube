import { ILogin } from '../ILogin';
import Users from '../../database/models/UsersModel';

export default interface ILoginService {
  connectUser(user: ILogin): Promise<string | object>,
  getRoleByToken(userEmail: string, authorization: string): Promise<Users | object>,
}
