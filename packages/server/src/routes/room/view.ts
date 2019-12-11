import express, { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';
import roomModel, { IRoomModel } from '../../models/roomModel';

const router: express.IRouter = Router();

router.get('/', expressAsyncHandler(async (req, res, _) => {
  const rooms: IRoomModel[] = await roomModel.find({}).select('id desc time name room users date max');
  return res.json({ rooms });
}));

router.get('/:roomID', expressAsyncHandler(async (req, res, _) => {
  const roomID: string = req.params.roomID;
  const room: IRoomModel = await roomModel.findById(roomID).select('-pin -created');
  return res.json({ room });
}));

export default router;
