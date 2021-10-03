import express, { Request, Response } from 'express';
import database from '../../../database';

const router = express.Router();

router.get('/bins', async (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    const auctions = await database('bins').orderBy('updated_at', 'desc').orderBy('start', 'desc').limit(20);

    res.status(200).json({
        auctions
    });
});

router.get('/auctions', async (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    const auctions = await database('auctions').orderBy('updated_at', 'desc').orderBy('start', 'desc').limit(20);

    res.status(200).json({
        auctions
    });
});

export default router;
