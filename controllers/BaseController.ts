export default class BaseController {
    protected _return<T = any>(res, data: T = null, status: number = 200) {
        return res.json({
            message: "Success",
            code: status,
            payload: data,
        });
    }
}
