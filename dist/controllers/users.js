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
const user_service_1 = __importDefault(require("../services/user.service"));
const BaseController_1 = __importDefault(require("./BaseController"));
const usersService = new user_service_1.default();
class UsersController extends BaseController_1.default {
    getUsers(req, res, next) {
        const _super = Object.create(null, {
            _return: { get: () => super._return }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield usersService.getById(parseInt(req.query.id));
                return _super._return.call(this, res, user);
            }
            catch (err) {
                next(err);
            }
        });
    }
    updateUser(req, res, next) {
        const _super = Object.create(null, {
            _return: { get: () => super._return }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedUser = yield usersService.update(req.params.id, req.body);
                return _super._return.call(this, res, updatedUser);
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = new UsersController();
