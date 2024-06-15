import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { itemsRouter, userRouter } from './routes/index';
import oldItemsRouter from './tmp/get-old-items'
import cors from 'cors'

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;
app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json());
app.use('/menu', itemsRouter);
app.use(userRouter);
app.use('/only-once', oldItemsRouter.router)

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server + Hello World');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  connectToDB();
});

const connectToDB = () => {
  console.log("connecting")
  mongoose.connect(process.env.DB_URI as string)
    .then(() => console.log('successfully connected to database!'))
    .catch((err) => console.log(`something went wrong ;-(\n${err}`))
}