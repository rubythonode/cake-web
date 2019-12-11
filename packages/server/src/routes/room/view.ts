import express, { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';
import { IAuthRequest } from '../../middlewares/auth';

import roomModel, { IRoomModel } from '../../models/roomModel';
import userModel, { IUserModel } from '../../models/userModel';

const router: express.IRouter = Router();

router.get('/', expressAsyncHandler(async (req, res, _) => {
  const rooms: IRoomModel[] = await roomModel.find({}).select('id desc times name room users date max');
  return res.json({ rooms });
}));

router.get('/:roomID', expressAsyncHandler(async (req, res, _) => {
  const roomID: string = req.params.roomID;
  const room: IRoomModel = await roomModel.findById(roomID).select('-pin -created');
  const delegate: IUserModel = await userModel.findById(room.delegate);
  room.delegate = delegate.name;
  return res.json({ room });
}));

router.get('/mine', expressAsyncHandler(
  async (req: IAuthRequest, res: express.Response, _: express.NextFunction) => {
    const { id: delegateID }: { id: string } = req.identity;

    const delegate: IUserModel = await userModel.findById(delegateID);
    const rooms: any = await roomModel.find({ users: delegate.uid });
    return res.json({ rooms });
  }),
);

export default router;
