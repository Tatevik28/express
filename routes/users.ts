import {Router} from 'express'
import usersController from '../controllers/UsersController'
import {
    userCreateSchema,
    userGetSchema,
    userUpdateSchema,
    validate
} from "../middlewares/ValidationMiddleware";

const router = Router();


router.get('/users', usersController.getAll);
router.get('/users/:id', validate(userGetSchema, 'params'), usersController.get);
router.post('/user', validate(userCreateSchema), usersController.create);
router.put('/users/:id', validate(userUpdateSchema), usersController.update);
router.delete('/users/:id', validate(userGetSchema, 'params'), usersController.delete);
router.put('/user/activate/:id', validate(userGetSchema, 'params'), usersController.activate);
export default router
