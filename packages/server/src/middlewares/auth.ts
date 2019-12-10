import * as express from 'express';
import passport from 'passport';
import passportJwt, {
  ExtractJwt as NSExtractJwt,
  Strategy as CStrategy,
  StrategyOptions as IStrategyOptions,
} from 'passport-jwt';

// tslint:disable-next-line:import-name
import jwtConfig from '../../jwtconfig.json';
import userModel, { IUserModel } from '../models/userModel';

const ExtractJwt: typeof NSExtractJwt = passportJwt.ExtractJwt;
const Strategy: typeof CStrategy = passportJwt.Strategy;
const params: IStrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtConfig.secret,
};

export interface IAuth {
  initialize(): express.Handler;
  authenticate(): any;
}

export default function auth(): IAuth {
  const strategy: passport.Strategy = new Strategy(params, (payload, done) => {
    userModel.findOne({ _id: payload.id }, (_, user) => {
      if (user) {
        return done(null, user);
      }
      return done(new Error('User not found'), null);
    });
  });
  passport.use(strategy);

  return {
    initialize (): express.Handler {
      return passport.initialize();
    },
    authenticate (): any {
      return passport.authenticate('jwt', { session: false });
    },
  };
}

export interface IAuthRequest extends express.Request {
  identity: IUserModel;
}

type TAuthMiddleWare
  = [
    any,
    (req: IAuthRequest, res: express.Response, next: express.NextFunction)
      => void | Promise<void | express.Response>
  ];

export const authMiddleware: TAuthMiddleWare = [
  auth().authenticate(),
  (req: IAuthRequest, res: express.Response, next: express.NextFunction) => {
    req.identity = req.user as any;
    delete req.user;
    return next();
  },
];
