require('dotenv').config();
import express, { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { connectToMongo } from './utils/db';

export const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());

app.use(cors({
  origin: process.env.CORS_ORIGIN
}));

app.get("/test", (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to the server!',
  });
});

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Can't find ${req.originalUrl} on this server!`) as any;
  err.statusCode = 404;
  next(err);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectToMongo();
});