import UserService from '../services/UserService'
import BaseController from "./BaseController";
import NotFoundException from "../exceptions/NotFoundException";

const usersService = new UserService();

class UsersController extends BaseController {
    public async getAll (req, res, next) {
        try {
            const users = await usersService.getAll()
            return super._return(res, users);
        } catch (err) {
            next(err);
        }
    }

    public async create (req, res, next) {
        try {
            const createdUser = await usersService.create(req.body)
            return super._return(res, createdUser);
        } catch (err) {
            next(err);
        }
    }

    public async get (req, res, next) {
        try {
            const user = await usersService.getById(Number(req.params.id))
            return super._return(res, user);
        } catch (err) {
            next(err);
        }
    }

    public async update (req, res, next) {
        try {
            const updatedUser = await usersService.update(Number(req.params.id), req.body)
            return super._return(res, updatedUser);
        } catch (err) {
            next(err);
        }
    }

    public async delete (req, res, next) {
        try {
            const deletedUser = await usersService.delete(Number(req.params.id))
            return super._return(res, deletedUser);
        } catch (err) {
            next(err);
        }
    }

    public async activate (req, res, next) {
        try {
            const activatedUser = await usersService.activate(Number(req.params.id))
            return super._return(res, activatedUser);
        } catch (err) {
            next(err);
        }
    }
}

export default new UsersController();
