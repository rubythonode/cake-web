import express, { Router } from 'express';

import login from './login';

const router: express.IRouter = Router();

router.use('/login', login);

export default router;
