import express from 'express';
import * as usersController from '../controllers/users';

const usersRouter = express.Router();

usersRouter.post('/', usersController.login);
// usersRouter.get('/', usersController.updateAccount);
// usersRouter.post('/', usersController.logout);

export default usersRouter;
