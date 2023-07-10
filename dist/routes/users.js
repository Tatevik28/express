"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsersController_1 = __importDefault(require("../controllers/UsersController"));
const ValidationMiddleware_1 = require("../middlewares/ValidationMiddleware");
const router = (0, express_1.Router)();
router.get('/users', UsersController_1.default.getAll);
router.get('/users/:id', (0, ValidationMiddleware_1.validate)(ValidationMiddleware_1.userGetSchema, 'params'), UsersController_1.default.get);
router.post('/user', (0, ValidationMiddleware_1.validate)(ValidationMiddleware_1.userCreateSchema), UsersController_1.default.create);
router.put('/users/:id', (0, ValidationMiddleware_1.validate)(ValidationMiddleware_1.userUpdateSchema), UsersController_1.default.update);
router.delete('/users/:id', (0, ValidationMiddleware_1.validate)(ValidationMiddleware_1.userGetSchema, 'params'), UsersController_1.default.delete);
router.put('/user/activate/:id', (0, ValidationMiddleware_1.validate)(ValidationMiddleware_1.userGetSchema, 'params'), UsersController_1.default.activate);
exports.default = router;
