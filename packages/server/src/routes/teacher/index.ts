import express, { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';

import roomModel, { IRoomModel } from '../../models/roomModel';
import userModel, { IUserModel } from '../../models/userModel';

const router: express.IRouter = Router();

router.get('/', expressAsyncHandler(async (req, res, _) => {
  const rooms: IRoomModel[] = await roomModel.find({}).select('approve id desc times name room users date max');
  return res.json({ rooms });
}));

router.get('/:roomID', expressAsyncHandler(async (req, res, _) => {
  const roomID: string = req.params.roomID;
  const room: IRoomModel = await roomModel.findById(roomID).select('-pin -created');
  const delegate: IUserModel = await userModel.findById(room.delegate);
  room.delegate = delegate.name;
  return res.json({ room });
}));

router.post('/:roomID', expressAsyncHandler(async (req, res, _) => {
  const roomID: string = req.params.roomID;
  const room: IRoomModel = await roomModel.findById(roomID);
  room.approve = true;
  room.save();
  return res.json({});
}));

export default router;
