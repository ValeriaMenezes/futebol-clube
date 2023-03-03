import { RequestHandler } from 'express';
import { JwtPayload, verify, Secret } from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

const authenticate = (token: string): JwtPayload => {
  const decodedUser = verify(token, JWT_SECRET as Secret);
  // console.log('1 decodedUser --->', decodedUser);

  return decodedUser as JwtPayload;
};

const authenticateToken: RequestHandler = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  if (authorization.length < 16) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }

  const decodedUser = authenticate(authorization);
  // console.log('2 decodedUser --->', decodedUser);

  if (!decodedUser) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }

  req.headers.userEmail = decodedUser.email;

  next();
};

export default authenticateToken;
