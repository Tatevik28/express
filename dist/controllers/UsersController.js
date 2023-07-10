"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("../services/UserService"));
const BaseController_1 = __importDefault(require("./BaseController"));
const usersService = new UserService_1.default();
class UsersController extends BaseController_1.default {
    getAll(req, res, next) {
        const _super = Object.create(null, {
            _return: { get: () => super._return }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield usersService.getAll();
                return _super._return.call(this, res, users);
            }
            catch (err) {
                next(err);
            }
        });
    }
    create(req, res, next) {
        const _super = Object.create(null, {
            _return: { get: () => super._return }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdUser = yield usersService.create(req.body);
                return _super._return.call(this, res, createdUser);
            }
            catch (err) {
                next(err);
            }
        });
    }
    get(req, res, next) {
        const _super = Object.create(null, {
            _return: { get: () => super._return }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield usersService.getById(Number(req.params.id));
                return _super._return.call(this, res, user);
            }
            catch (err) {
                next(err);
            }
        });
    }
    update(req, res, next) {
        const _super = Object.create(null, {
            _return: { get: () => super._return }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedUser = yield usersService.update(Number(req.params.id), req.body);
                return _super._return.call(this, res, updatedUser);
            }
            catch (err) {
                next(err);
            }
        });
    }
    delete(req, res, next) {
        const _super = Object.create(null, {
            _return: { get: () => super._return }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletedUser = yield usersService.delete(Number(req.params.id));
                return _super._return.call(this, res, deletedUser);
            }
            catch (err) {
                next(err);
            }
        });
    }
    activate(req, res, next) {
        const _super = Object.create(null, {
            _return: { get: () => super._return }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const activatedUser = yield usersService.activate(Number(req.params.id));
                return _super._return.call(this, res, activatedUser);
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = new UsersController();
