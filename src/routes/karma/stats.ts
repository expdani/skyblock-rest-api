import express, { Request, Response } from 'express';
import database from '../../../database';

const router = express.Router();

router.get('/stats', async (req: Request, res: Response) => {
    const total_upvotes = await database('karma_posts').where({ vote: 'upvote' }).count('vote as count');
    const total_downvotes = await database('karma_posts').where({ vote: 'downvote' }).count('vote as count');
    const unique_posts = await database('karma_posts').countDistinct('messageID as count');
    const most_upvotes_author = await database('karma_total').max('total as total');
    const most_upvotes_post = await database('karma_posts').where({ vote: 'upvote' }).groupBy('messageID').count('vote as count');

    res.status(200).json({
        total_upvotes: total_upvotes[0],
        total_downvotes: total_downvotes[0],
        unique_posts: unique_posts[0],
        most_upvotes_author: most_upvotes_author[0],
        most_upvotes_post: most_upvotes_post.reduce(function (prev, current) {
            return prev.count > current.count ? prev : current;
        })
    });
});

export default router;
