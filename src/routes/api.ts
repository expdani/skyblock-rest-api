import express from 'express';
import stats from './karma/stats';

const router = express.Router();

router.use('/', stats);

export default router;
