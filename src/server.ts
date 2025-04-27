import express from 'express';
import "./config/envs";
import { PORT } from './config/envs';
import dbInit from './config/database';
import morgan from 'morgan';
import { mainRouter } from './routes';
const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1", mainRouter)

export default app
