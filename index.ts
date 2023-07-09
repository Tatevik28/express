import express from "express";
import bodyParser from "body-parser";

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
import userRoute from './routes/users';
import ErrorMiddleware from "./middlewares/ErrorMiddleware";

app.use('/api', userRoute)

app.get('/', function(req, res){
    res.send('hello world')
});

app.use(ErrorMiddleware);

app.listen(3000);
