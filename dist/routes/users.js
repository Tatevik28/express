"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsersController_1 = __importDefault(require("../controllers/UsersController"));
const router = (0, express_1.Router)();
router.get('/users', UsersController_1.default.getAll);
router.get('/users/:id', UsersController_1.default.get);
router.post('/user', UsersController_1.default.create);
router.put('/users/:id', UsersController_1.default.update);
router.delete('/users/:id', UsersController_1.default.delete);
router.put('/user/activate/:id', UsersController_1.default.activate);
exports.default = router;
