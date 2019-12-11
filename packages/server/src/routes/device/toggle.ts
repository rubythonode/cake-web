import express, { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';

import * as admin from 'firebase-admin';
import roomModel, { IRoomModel } from '../../models/roomModel';

const router: express.IRouter = Router();

router.post('/', expressAsyncHandler(async (req, res, _) => {
  const { room, user }: { room: string, user: string } = req.body;
  const isRoomExist: IRoomModel = await roomModel.findOne({
    $and: [
      { room },
      { approve: true },
      { users: user },
    ],
  });

  if (isRoomExist) {
    const db: any = admin.database();
    const ref: any = db.ref(`/rooms/${room}`);
    ref.once('value', (snapshot: any) => {
      ref.set(!snapshot.val());
    });
  }

  return res.sendStatus(isRoomExist ? 200 : 404);
}));

router.get('/', expressAsyncHandler(async (req, res, _) => {
  const { room, user }: { room: string, user: string } = req.query;
  const isRoomExist: IRoomModel = await roomModel.findOne({
    $and: [
      { room },
      { approve: true },
      { users: user },
    ],
  });

  if (isRoomExist) {
    const db: any = admin.database();
    const ref: any = db.ref(`/rooms/${room}`);
    ref.once('value', (snapshot: any) => {
      ref.set(!snapshot.val());
    });
  }

  return res.sendStatus(isRoomExist ? 200 : 404);
}));

export default router;
