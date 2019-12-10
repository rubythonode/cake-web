import express, { Router } from 'express';

import toggle from './toggle';

const router: express.IRouter = Router();

router.use('/toggle', toggle);

export default router;
