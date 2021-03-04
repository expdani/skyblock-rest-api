import express from 'express';
import { env } from '../environment';
import http from 'http';
import api from './routes/api';
import bodyParser from 'body-parser';

const subdomain = require('express-subdomain');
const app = express();
const router = express.Router();

router.use('/', api);

app.use(subdomain(env.API_SUBDOMAIN, router));

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());

const httpServer = http.createServer(app);
httpServer.listen(env.PORT, () => {
    console.log(`Server running on port ${env.PORT}`);
});
