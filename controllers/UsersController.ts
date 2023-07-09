import UserService from '../services/UserService'
import BaseController from "./BaseController";
import NotFoundException from "../exceptions/NotFoundException";

const usersService = new UserService();

class UsersController extends BaseController {
    public async getUser (req, res, next) {
        try {
            const user = await usersService.getById(parseInt(req.query.id))
            return super._return(res, user);
        } catch (err) {
            console.log(5)
            next(err);
        }
    }

    public async updateUser (req, res, next) {
        try {
            const updatedUser = await usersService.update(req.params.id, req.body)
            return super._return(res, updatedUser);
        } catch (err) {
            next(err);
        }
    }

    public async deleteUser (req, res, next) {
        try {
            const deletedUser = await usersService.delete(parseInt(req.query.id))
            return super._return(res, deletedUser);
        } catch (err) {
            next(err);
        }
    }

    public async createUser (req, res, next) {
        try {
            const createdUser = await usersService.create(req.body)
            return super._return(res, createdUser);
        } catch (err) {
            next(err);
        }
    }
}

export default new UsersController();
