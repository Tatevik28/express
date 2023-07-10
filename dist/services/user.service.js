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
const users_json_1 = __importDefault(require("../users.json"));
const fs_1 = __importDefault(require("fs"));
const NotFoundException_1 = __importDefault(require("../exceptions/NotFoundException"));
// const Users = JSON.parse(users)
const Users = users_json_1.default;
class UserService {
    constructor() {
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield Users.find(user => user.id === id);
        });
    }
    create(data) {
        const user = data;
        Users.push(user);
        return user;
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = Users.find(user => user.id == id);
            if (!user) {
                console.log("error");
                throw new NotFoundException_1.default("User not found");
            }
            Object.keys(data).forEach(item => {
                user[item] = data[item];
            });
            this.updateJson(Users);
            return user;
        });
    }
    updateJson(users) {
        fs_1.default.writeFileSync('users.json', JSON.stringify(users, null, 2));
    }
}
exports.default = UserService;
