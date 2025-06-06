import express from 'express';
import { isAuthorised, login, register } from '../controllers/userController';
import { authUser } from '../middleware/authUser';


const userRouter = express.Router();

userRouter.post('/login', login);
userRouter.post('/register', register);
userRouter.get('/is-auth', authUser, isAuthorised);

export default userRouter;