import {Router} from 'express'
import usersController from '../controllers/UsersController'

const router = Router();


router.post('/user', usersController.createUser);
router.get('/user', usersController.getUser);
router.put('/users/:id', usersController.updateUser);
router.delete('/user', usersController.deleteUser);
export default router
