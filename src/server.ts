import express, { Request, Response } from 'express'
import cors from 'cors'
import { Encuesta } from './entities/encuesta'

export const app = express()
app.use(express.json())
app.use(cors())
// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.post('/encuesta', async (req: Request, res: Response) => {
  console.log(req.body)
  await Encuesta.save(req.body)
  res.status(201).json()
})
