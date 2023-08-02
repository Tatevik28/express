import express from "express";
import bodyParser from "body-parser";
import "reflect-metadata";
import { DataSource } from "typeorm";
import userRoute from './routes/users';
import ErrorMiddleware from "./middlewares/ErrorMiddleware";
import NotFoundMiddleware from "./middlewares/NotFoundMiddleware";
import ApiKeyMiddleware from "./middlewares/ApiKeyMiddleware";
import {User} from "./users";

const app = express();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "user",
    password: "pass",
    database: "postgres",
    entities: [User],
    synchronize: true,
    logging: false,
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', ApiKeyMiddleware, userRoute)

app.get('/', function(req, res){
    res.send('hello world')
});

app.use(NotFoundMiddleware)

app.use(ErrorMiddleware);

app.listen(3000);
