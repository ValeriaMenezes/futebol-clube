import { ILogin } from '../ILogin';

export default interface ILoginService {
  connectUser(user: ILogin): Promise<string | object>
}
