import express, { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';
import roomModel, { IRoomModel } from '../../models/roomModel';

const router: express.IRouter = Router();

router.post('/', expressAsyncHandler(async (req, res, _) => {
  const { room, user }: { room: string, user: string } = req.body;

  const isRoomExist: IRoomModel = await roomModel.findOne({
    $and: [
      { _id: room },
      {
        users: { all: [user] },
      },
    ],
  });

  // TODO: toggle firebase realtime DB

  return res.sendStatus(isRoomExist ? 200 : 404);
}));

export default router;
