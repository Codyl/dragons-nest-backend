import Skill from "../models/skill";
import { Request, Response } from 'express';

const getSkills = async (req: Request, res: Response) => {
  try {
    const skills = await Skill.find().exec();
    return res.status(200).json({
      message: 'Skills successfully retrieved.',
      skills: skills,
    });
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};
