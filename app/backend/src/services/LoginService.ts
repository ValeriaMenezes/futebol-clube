import { compareSync } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import Users from '../database/models/UsersModel';
import { ILogin } from '../interfaces/ILogin';
import ILoginService from '../interfaces/serviceInterfaces/ILoginService';
import StatusErrors from '../errors/statusErrors';

const { JWT_SECRET } = process.env;

export default class LoginService implements ILoginService {
  async connectUser(user: ILogin): Promise<string | object> {
    // console.log('user ---->', user);

    const validUser = await Users.findOne({ where: { email: user.email } });
    // console.log('validUser', validUser?.dataValues);

    if (!validUser) {
      throw new StatusErrors('Invalid email or password');
    }

    const passwordCrypt = compareSync(user.password, validUser?.dataValues.password as string);
    if (!passwordCrypt) {
      throw new StatusErrors('Invalid email or password');
    }

    const token = this.generateToken(user);
    return token;
  }

  private generateToken = (user: ILogin): string => {
    // const jwtConfig: SignOptions = {
    //   expiresIn: '12d',
    //   algorithm: 'HS256',
    // };

    const payload = {
      // id: user.id,
      email: user.email,
      password: user.password,
    };

    const token = sign(payload, JWT_SECRET as string);
    return token;
  };

  getRoleByToken = async (userEmail: string, authorization: string): Promise<Users | object> => {
    if (!authorization || authorization.length < 16) {
      throw new StatusErrors('Token not found');
    }

    const user = await Users.findOne({ where: { email: userEmail } });
    if (user) {
      return { role: user.role };
    }

    return { role: '' };
  };
}
