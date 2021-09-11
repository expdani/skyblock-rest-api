import express from 'express';
import index from './flipper/index';

const router = express.Router();

router.use('/', index);

export default router;
