import AppException from "./AppException";


export default class NotFoundException extends AppException {
    constructor(message: string = "Not found exception") {
        super(message, 404);
    }
}
