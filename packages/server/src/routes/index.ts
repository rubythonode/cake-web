import express, { Router } from 'express';

import auth from './auth';
import device from './device';
import room from './room';
import teacher from './teacher';

const router: express.IRouter = Router();

router.use('/teacher', teacher);
router.use('/auth', auth);
router.use('/device', device);
router.use('/room', room);

export default router;
