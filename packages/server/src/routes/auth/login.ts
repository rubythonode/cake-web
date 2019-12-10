import express, { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';
import jwtSimple from 'jwt-simple';

// tslint:disable-next-line:import-name
import jwtConfig from '../../../jwtconfig.json';
import userModel, { IUserModel } from '../../models/userModel';

const router: express.IRouter = Router();

interface ILoginPayload {
  username: string;
  password: string;
}

router.post('/', expressAsyncHandler(async (req, res, _) => {
  const { username, password }: ILoginPayload = req.body;
  if (!username || !password) {
    return res.status(400).json({
      message: '사용자 이메일과 패스워드 값이 필요합니다.',
    });
  }

  // 사용자를 로컬 DB에서 검색함
  userModel.findOne({ username })
    .then(async (user: IUserModel) => {
      // 사용자가 존재하지 않는 경우, 디미고인 API로 쿼리

      if (!user) {
        try {
          // 사용자가 존재하는 경우
          const newUser: IUserModel =
            await userModel.schema.statics.createDimigo(username, password);

          const { id: newID }: { id: string } = newUser;
          const newToken: string = jwtSimple.encode({ newID }, jwtConfig.secret);
          return res.json({ newID, newToken });
        } catch (_) {
          // 디미고 계정에도 없으면
          return res.status(404).json({
            message: '주어진 이메일의 사용자가 없습니다.',
          });
        }
      }

      // 사용자가 존재하는 경우 토큰 발급해 제공
      if (!user.verifyPassword(password)) {
        return res.status(401).json({
          message: '패스워드가 잘못되었습니다.',
        });
      }

      const { id }: { id: string } = user;
      const token: string = jwtSimple.encode({ id }, jwtConfig.secret);
      return res.json({ id, token });
    });
}));

export default router;
