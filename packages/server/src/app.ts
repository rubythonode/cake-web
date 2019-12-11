import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import path from 'path';

import auth from './middlewares/auth';
import routes from './routes';

const app: express.Application = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/uploads', express.static(path.join(__dirname, '../../uploads')));

app.use(auth().initialize());
app.use('/', routes);

interface IError extends Error {
  status: number;
  data?: any;
}

// tslint:disable-next-line:no-unused-vars
app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Go to room!');
});

// tslint:disable-next-line:no-unused-vars
app.use((err: IError, req: express.Request, res: express.Response, next: express.NextFunction) => {
  // tslint:disable-next-line:no-console
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message,
  });
});

export default app;
