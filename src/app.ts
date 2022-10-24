import express from 'express';
import carRouter from './routes/CarRouter';

const app = express();

app.use(express.json());
app.use('/cars', carRouter);

export default app;