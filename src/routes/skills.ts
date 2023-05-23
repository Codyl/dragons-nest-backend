import express from 'express';
import skillsController from '../controllers/skills';

const skillsRouter = express.Router();

skillsRouter.use('/', skillsController.getSkills);

export default skillsRouter;
