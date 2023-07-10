import AppException from "../exceptions/AppException";

export default (req, res, next) => {
    if (req.header("x-api-key") !== '123') {
        throw new AppException('Api key is wrong', 401)
    }

    next();
}
