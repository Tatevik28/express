import {Router} from 'express'
import usersController from '../controllers/UsersController'
import ApiKeyMiddleware from "../middlewares/ApiKeyMiddleware";

const router = Router();


router.get('/users', usersController.getAll);
router.get('/users/:id', usersController.get);
router.post('/user', usersController.create);
router.put('/users/:id', usersController.update);
router.delete('/users/:id', usersController.delete);
router.put('/user/activate/:id', usersController.activate);
export default router
