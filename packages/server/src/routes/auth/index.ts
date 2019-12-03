import express, { Router } from 'express';

import join from './join';
import login from './login';

const router: express.IRouter = Router();

router.use('/join', join);
router.use('/login', login);

export default router;
