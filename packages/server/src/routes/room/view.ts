import express, { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';
import { IAuthRequest } from '../../middlewares/auth';

import roomModel, { IRoomModel, roomToMobile } from '../../models/roomModel';
import userModel, { IUserModel } from '../../models/userModel';

const router: express.IRouter = Router();

router.get('/', expressAsyncHandler(async (req, res, _) => {
  const mobile: string = req.query.mobile;
  const rooms: IRoomModel[] = await roomModel.find({}).select('id desc times name room users date max');

  if (mobile) {
    const mobileRooms: any = await Promise.all(rooms.map(
      async (r: IRoomModel) => await roomToMobile(r)));
    return res.json({
      rooms: mobileRooms,
    });
  }
  return res.json({ rooms });
}));

router.get('/mine', expressAsyncHandler(
  async (req: IAuthRequest, res: express.Response, _: express.NextFunction) => {
    const { id: delegateID }: { id: string } = req.identity;
    const mobile: string = req.query.mobile;

    const delegate: IUserModel = await userModel.findById(delegateID);
    const rooms: any = await roomModel
      .find({ users: delegate.uid })
      .select('id desc times name room users date max');

    if (mobile) {
      const mobileRooms: any = await Promise.all(rooms.map(
        async (r: IRoomModel) => await roomToMobile(r)));
      return res.json({
        rooms: mobileRooms,
      });
    }
    return res.json({ rooms });
  }),
);

router.get('/:roomID', expressAsyncHandler(async (req, res, _) => {
  const roomID: string = req.params.roomID;
  const room: IRoomModel = await roomModel.findById(roomID).select('-pin -created');
  const delegate: IUserModel = await userModel.findById(room.delegate);
  room.delegate = delegate.name;
  return res.json({ room });
}));

export default router;
