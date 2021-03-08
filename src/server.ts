import express from 'express';
import { env } from '../environment';
import http from 'http';
import api from './routes/api';
import bodyParser from 'body-parser';

const subdomain = require('express-subdomain');
const app = express();
const router = express.Router();
const cors = require('cors');

app.use(cors());

router.use('/', api);

app.use(subdomain(env.API_SUBDOMAIN, router));

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Type');
    next();
});

const httpServer = http.createServer(app);
httpServer.listen(env.PORT, () => {
    console.log(`Server running on port ${env.PORT}`);
});
