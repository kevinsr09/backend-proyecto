import { Request, Response, Router } from 'express'
import { Encuesta } from '../entities/encuesta'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class EncuestaRouter {
  static routes (): Router {
    const router = Router()
    router.get('/encuesta', (req: Request, res: Response) => {
      res.json({ bien: 'hecho' })
    })
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    router.post('/encuesta', async (req: Request, res: Response) => {
      console.log(req.body)
      try {
        await Encuesta.save(req.body)
        res.status(201).json()
      } catch (e) {
        console.log(e)
        res.status(500)
      }
    })
    return router
  }
}
