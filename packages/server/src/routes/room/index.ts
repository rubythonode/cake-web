import express, { Router } from 'express';

// 새로운 방을 생성하는 엔드포인트
import create from './create';

// 기존의 방을 삭제하는 엔드포인트
import remove from './remove';

// 기존의 방에 참가하거나 나가는 엔드포인트
import join from './join';

// 방 목록 및 개별 방 정보를 조회하는 엔드포인트
import view from './view';

const router: express.IRouter = Router();

router.use('/', create);
router.use('/', remove);
router.use('/', join);
router.use('/', view);

export default router;
