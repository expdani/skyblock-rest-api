import express, { Request, Response } from 'express';
import database from '../../../database';

const router = express.Router();

router.get('/flips', async (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    const auctions = await database('auction').orderBy('updated_at', 'desc').orderBy('start', 'desc').limit(20);

    res.status(200).json({
        auctions
    });
});

export default router;
