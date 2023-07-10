import AppException from "../exceptions/AppException";
import {NextFunction, Request, Response} from "express";

interface IError extends Error {
    status?: number
}
export default (err: IError, req: Request, res:Response, next: NextFunction) => {
    let message: string = err.message;
    let status: number = err.status;
    let stack: string = err.stack;

    if (!(err instanceof AppException)) {
        status = 500;
    }

    return res.json({
        message: message,
        status: status,
        stack: stack,
        err: err
    })
}
