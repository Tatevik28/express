"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsersController_1 = __importDefault(require("../controllers/UsersController"));
const router = (0, express_1.Router)();
router.post('/user', UsersController_1.default.createUser);
router.get('/user', UsersController_1.default.getUser);
router.put('/users/:id', UsersController_1.default.updateUser);
router.delete('/user', UsersController_1.default.deleteUser);
exports.default = router;
