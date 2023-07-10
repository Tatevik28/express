import AppException from "../exceptions/AppException";
import {NextFunction, Request, Response} from "express";

export default (req: Request, res: Response, next: NextFunction): void => {
    if (req.header("x-api-key") !== '123') {
        throw new AppException('Api key is wrong', 401)
    }

    next();
}
