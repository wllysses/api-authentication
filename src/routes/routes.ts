import { Router } from "express";
import { UsersController } from "../controllers/UsersController";
import { UsersValidate } from "../middlewares/UsersValidate";


const router = Router();

const usersController = new UsersController();
const usersValidate = new UsersValidate();

router.post('/users', usersValidate.emailAlReadyRegistered, usersValidate.validatePassword, usersController.createUser);
router.post('/auth', usersValidate.validateFields ,usersController.authUser);

export { router };
