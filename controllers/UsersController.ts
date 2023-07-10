import UserService from '../services/UserService'
import BaseController from "./BaseController";
import {NextFunction, Request, Response} from "express";
import {IUser} from "../interfaces/UserInterface";

const usersService = new UserService();

class UsersController extends BaseController {
    public async getAll (req: Request, res: Response, next: NextFunction) {
        try {
            const users = await usersService.getAll()
            return super._return<IUser[]>(res, users);
        } catch (err) {
            next(err);
        }
    }

    public async create (req: Request, res: Response, next: NextFunction) {
        try {
            const createdUser = await usersService.create(req.body)
            return super._return<IUser>(res, createdUser);
        } catch (err) {
            next(err);
        }
    }

    public async get (req: Request, res: Response, next: NextFunction) {
        try {
            const user = await usersService.getById(Number(req.params.id))
            return super._return<IUser>(res, user);
        } catch (err) {
            next(err);
        }
    }

    public async update (req: Request, res: Response, next: NextFunction) {
        try {
            const updatedUser = await usersService.update(Number(req.params.id), req.body)
            return super._return<IUser>(res, updatedUser);
        } catch (err) {
            next(err);
        }
    }

    public async delete (req: Request, res: Response, next: NextFunction) {
        try {
            const deletedUser: number = await usersService.delete(Number(req.params.id))
            return super._return<number>(res, deletedUser);
        } catch (err) {
            next(err);
        }
    }

    public async activate (req: Request, res: Response, next: NextFunction) {
        try {
            const activatedUser: IUser = await usersService.activate(Number(req.params.id))
            return super._return<IUser>(res, activatedUser);
        } catch (err) {
            next(err);
        }
    }
}

export default new UsersController();
