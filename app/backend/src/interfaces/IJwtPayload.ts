import { JwtPayload } from 'jsonwebtoken';

export interface IJwtPayload extends JwtPayload {
  email: string,
  password: string,
}
