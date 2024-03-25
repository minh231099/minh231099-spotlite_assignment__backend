import express from 'express';
import logger from './logger';
import bodyParser from 'body-parser';
import router from './routes/v1';

const app = express();

app.use((req, res, next) => {
    res.header(`Access-Control-Allow-Origin`, `*`);
    res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
    res.header(`Access-Control-Allow-Headers`, `Content-Type`);
    next();
})

app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(logger);

app.get('/api/test', (req, res) => {
    res.send('test');
})

app.use('/api/v1', router);

app.use((err: any, req: any, res: any, next: any) => {
    console.log(err);
})

export default app;