import express, { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';

const router: express.IRouter = Router();

router.get('/', expressAsyncHandler(async (req, res, _) => {
  return res.json({});
}));

export default router;
