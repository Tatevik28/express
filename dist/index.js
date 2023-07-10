"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// routes
const users_1 = __importDefault(require("./routes/users"));
const ErrorMiddleware_1 = __importDefault(require("./middlewares/ErrorMiddleware"));
const NotFoundMiddleware_1 = __importDefault(require("./middlewares/NotFoundMiddleware"));
const ApiKeyMiddleware_1 = __importDefault(require("./middlewares/ApiKeyMiddleware"));
app.use('/api', ApiKeyMiddleware_1.default, users_1.default);
app.get('/', function (req, res) {
    res.send('hello world');
});
app.use(NotFoundMiddleware_1.default);
app.use(ErrorMiddleware_1.default);
app.listen(3000);
