import express, { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';
import roomModel, { IRoomModel } from '../../models/roomModel';

const router: express.IRouter = Router();

router.get('/', expressAsyncHandler(async (req, res, _) => {
  const rooms: IRoomModel[] = await roomModel.find({});
  return res.json({ rooms });
}));

export default router;
