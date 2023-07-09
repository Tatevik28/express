import AppException from "../exceptions/AppException";

export default (err, req, res, next) => {
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
