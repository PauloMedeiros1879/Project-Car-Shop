import express from 'express';
// erros assíncronos não são tratados por padrão e, por esse motivo, utilizaremos o pacote express-async-errors
import 'express-async-errors';
import errorHandler from './middlewares/error';
import carRouter from './routes/CarRouter';
import motorcycleRouterRouter from './routes/MotorcycleRouter';

const app = express();

app.use(express.json());
app.use('/cars', carRouter);
app.use('/motorcycles', motorcycleRouterRouter);
app.use(errorHandler);

export default app;