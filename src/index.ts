const subdomain = require('express-subdomain');
import express from 'express';
import { env } from '../environment';
import http from 'http';
import api from './routes/api';
import bodyParser from 'body-parser';

const app = express();
const router = express.Router();

// app.use(
//     bodyParser.urlencoded({
//         extended: true
//     })
// );
// app.use(bodyParser.json());

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Acces-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//         return res.status(200).json({});
//     }
// });

//api specific routes
router.use('/', api);

app.use(subdomain(env.API_SUBDOMAIN, router));

// example.com
app.get('/', function (req, res) {
    res.send('Homepage');
});

const httpServer = http.createServer(app);
httpServer.listen(env.PORT, () => {
    console.log(`Server running on port ${env.PORT}`);
});
