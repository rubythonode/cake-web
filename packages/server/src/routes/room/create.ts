import express, { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';
import { authMiddleware, IAuthRequest } from '../../middlewares/auth';
import roomModel, { IRoomPayload } from '../../models/roomModel';

const router: express.IRouter = Router();

router.use('/', authMiddleware);
router.post('/', expressAsyncHandler(
  async (req: IAuthRequest, res: express.Response, _: express.NextFunction) => {
    const { id: delegateID }: { id: string } = req.identity;
    const { body: room }: { body: IRoomPayload } = req;

    const { id }: { id: string } = await roomModel.schema.statics.createRoom(room, delegateID);
    return res.json({ id });
  }));

export default router;
