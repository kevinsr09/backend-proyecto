import express from 'express'
import cors from 'cors'
import { EncuestaRouter } from './routes/encuesta'

export const app = express()
app.use(express.json())
app.use(cors())
// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.use('/api/v1', EncuestaRouter.routes())
