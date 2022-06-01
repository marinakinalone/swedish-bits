import express, { Express, Request, Response } from 'express';
import connectDB from './db/db';
import Vocabulary from './controllers/Vocabulary';
// import cors from 'cors';
const app: Express = express();

connectDB();

app.get('/all', async (req: Request, res: Response) => {
  const data = await Vocabulary.find({});
  res.json(data);
});

export default app;