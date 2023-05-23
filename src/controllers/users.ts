import { Request, Response } from 'express';
import User from '../models/user';
import mongoose from 'mongoose';
import jwt, {Secret} from 'jsonwebtoken';

export const login = async (req: Request, res: Response) => {
  const { userData } = req.body;
  const secret: Secret = String(process.env.JWT_TOKEN);

  try {
    let user = await User.findById('000' + userData.googleId).exec();

    if (!user) {
      user = await User.create(userData);
    }
    const token = jwt.sign(
      {
        name: userData.name,
        google_id: userData.googleId,
      },
      secret
    );

    return res.status(200).json({
      message: 'User successfully retrieved.',
      user,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Invalid user: ' + error,
    });
  }
};
export const logout = async (req: Request, res: Response) => {};
