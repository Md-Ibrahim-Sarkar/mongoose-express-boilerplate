import express, { Request, Response } from "express";
import cors from "cors";
import { StatusCodes } from "http-status-codes";
import { router } from "./app/routes";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";

const app = express()




app.use(cors())
app.use(express.json())


app.use('api/v1' , router)

app.get('/', (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({
    message: 'Welcome to Node.js, Express, Mongoose Backend',
  });
})



app.use(globalErrorHandler)

app.use(notFound)


export default app