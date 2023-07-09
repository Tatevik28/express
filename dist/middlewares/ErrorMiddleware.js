"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppException_1 = __importDefault(require("../exceptions/AppException"));
exports.default = (err, req, res, next) => {
    let message = err.message;
    let status = err.status;
    let stack = err.stack;
    if (!(err instanceof AppException_1.default)) {
        status = 500;
    }
    return res.json({
        message: message,
        status: status,
        stack: stack,
        err: err
    });
};
