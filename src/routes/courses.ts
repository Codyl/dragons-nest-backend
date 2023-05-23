import express from 'express';
import coursesController from '../controllers/courses';

const courseRouter = express.Router();

courseRouter.use('/samples', coursesController.getSamples);
courseRouter.use('/', coursesController.getCourses);

export default courseRouter;
