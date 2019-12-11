import express, { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';
// tslint:disable-next-line import-name
import timestamp from 'unix-timestamp';

import { authMiddleware, IAuthRequest } from '../../middlewares/auth';
import roomModel, { IRoomPayload } from '../../models/roomModel';

const router: express.IRouter = Router();

router.use('/', authMiddleware);
router.post('/', expressAsyncHandler(
  async (req: IAuthRequest, res: express.Response, _: express.NextFunction) => {
    const { id: delegateID }: { id: string } = req.identity;
    const { desc, max, name, pin, room, time, date }: IRoomPayload = req.body;
    const roomData: IRoomPayload  = {
      desc,
      max,
      name,
      pin,
      room,
      time,
      date: timestamp.toDate(date),
    };

    const { id }: { id: string } = await roomModel.schema.statics.createRoom(roomData, delegateID);
    return res.json({ id });
  }));

export default router;
