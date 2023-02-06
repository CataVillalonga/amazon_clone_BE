import { Request,Response,NextFunction } from "express";
import HttpException from '@/utils/exceptions/http.exception'

interface IError {
  error: HttpException;
  req: Request;
  res: Response;
  next: NextFunction
}

const ErrorMiddleware = ({error, req, res}:IError) :void => {
  const status = error.status || 500 ;
  const message = error.message || 'Something went wrong';

  res.status(status)
    .send({
      status,
      message
    })
}

export default ErrorMiddleware