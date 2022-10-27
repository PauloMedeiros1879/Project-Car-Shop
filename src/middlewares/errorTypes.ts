// padronizando os erros de forma a serem tratados em qualquer camada
export enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  InvalidMongoId = 'InvalidMongoId',
}

type ErrorResObject = {
  message: string;
  httpStatus: number;
};

export type Err = {
  [key in ErrorTypes]: ErrorResObject;
};

export const error: Err = {
  EntityNotFound: {
    message: 'Object not found',
    httpStatus: 404,
  },
  InvalidMongoId: {
    message: 'Id must have 24 hexadecimal characters',
    httpStatus: 400,
  },
};