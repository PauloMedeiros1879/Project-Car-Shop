import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { ErrorTypes, error } from './errorTypes';

const errorHandler: ErrorRequestHandler = (
  err: Error | ZodError,
  _req,
  res,
  _next,
) => {
  if (err instanceof ZodError) {
    return res.status(400).json({ message: err.issues });
  }

  const msgErrorType = err.message as keyof typeof ErrorTypes;
  const mapError = error[msgErrorType];

  if (mapError) {
    const { httpStatus, message } = mapError;
    return res.status(httpStatus).json({ error: message });
  }

  console.error(err, 'lugar errado');
  return res.status(500).json({ message: 'Internal Error' });
};

export default errorHandler;