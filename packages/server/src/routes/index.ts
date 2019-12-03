import express, { Router } from 'express';

import admin from './admin';
import auth from './auth';
import room from './room';

const router: express.IRouter = Router();

router.use('/admin', admin);
router.use('/auth', auth);
router.use('/room', room);

export default router;
