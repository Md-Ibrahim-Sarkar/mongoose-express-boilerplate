
import { Response } from "express";


interface TMeta {
  total: number
}


interface TResponse<T> {
  statuscode: number;
  success: boolean;
  message: string;
  data: T;
  meta?: TMeta
}




const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  
  res.status(data.statuscode).json({
    statusCode: data.statuscode,
    success: data.success,
    message: data.message,
    data: data.data,
    meta: data.meta
  })
}

export default sendResponse