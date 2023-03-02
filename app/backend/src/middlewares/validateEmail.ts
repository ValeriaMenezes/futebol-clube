import { RequestHandler } from 'express';

const validateEmail: RequestHandler = (req, res, next) => {
  const { email } = req.body;

  if (!email || email.length < 5) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  const regexEmail = /\S+@\S+\.\S+/;
  const validatingEmail = regexEmail.test(email);

  if (!validatingEmail) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  next();
};

export default validateEmail;
