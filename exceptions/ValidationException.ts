import AppException from "./AppException";

export default class ValidationException extends AppException {
    constructor(message: string = "Validation error") {
        super(message, 422);
    }
}
