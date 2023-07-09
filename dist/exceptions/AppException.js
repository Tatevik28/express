"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppException extends Error {
    constructor(message, status) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
        this.status = status || 500;
    }
}
exports.default = AppException;
