import express from 'express';
import "./config/envs";
import { PORT } from './config/envs';
import dbInit from './config/database';
const app = express();

export default app
