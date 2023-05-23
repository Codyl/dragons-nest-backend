import express from 'express';
import userCoursesController from '../controllers/user-courses';

const userCoursesRouter = express.Router();

userCoursesRouter.use('/:userId/:id', userCoursesController.getUserCourse);
userCoursesRouter.use('/:userId', userCoursesController.getUserCourses);

export default userCoursesRouter;
