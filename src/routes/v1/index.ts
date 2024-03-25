import {Router} from 'express';

const router = Router();

import BookRouter from './bookRoute';
import BookTagRouter from './bookTagRoute';

router.use('/book', BookRouter);
router.use('/booktag', BookTagRouter);

export default router;