import { Request, Response, Router } from 'express'
import { PanesFav } from '../entities/PanesFav'
import { Encuesta } from '../entities/encuesta'
import { PanaderiaPref } from '../entities/RazonesPrefPanaderia'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class EncuestaRouter {
  static routes (): Router {
    const router = Router()

    /*
    {
  frecuencia_compra: 3,
  gasto_promedio: 54566,
  panes_favoritos: [ 'blanco', 'integral', 'avena', 'croissant' ],
  preferencia_compra_pan: 'Panaderia local',
  opinion_panaderias_area: 'si',
  razones_pref_panaderias_locales: [
    'frescura',
    'variedad',
    'apoyoanegocioslocales',
    'keoikc',
    'asjbdlaknsdm'
  ],
  comentarios_habitos_compra_pan: '',
  acepta_ofertas_actualizaciones: 'no'
}
    */

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    router.post('/encuesta', async (req: Request, res: Response) => {
      console.log(req.body)
      const panesFav = req.body.panes_favoritos as string[]
      if (panesFav.length > 0) {
        try {
          for (const element of panesFav) {
            const pan = await PanesFav.findOne({
              where: {
                name: element
              }
            })
            if (pan === null) {
              await PanesFav.save({
                name: element,
                count: 1
              })
            } else {
              pan.count += 1
              await PanesFav.save(pan)
            }
          }
        } catch (e) {
          console.log(e)
        }
      }

      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { frecuencia_compra, gasto_promedio, lugar_pref_compra_pan, opinion_panaderias_area, comentarios_habitos_compra_pan, acepta_ofertas_actualizaciones } = req.body

      await Encuesta.save({
        frecuencia_compra,
        gasto_promedio,
        lugar_pref_compra_pan,
        opinion_panaderias_area: opinion_panaderias_area ?? '',
        comentarios_habitos_compra_pan: comentarios_habitos_compra_pan ?? '',
        acepta_ofertas_actualizaciones: acepta_ofertas_actualizaciones ?? ''
      })

      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { razones_pref_panaderias_locales } = req.body
      if (razones_pref_panaderias_locales.length > 0) {
        try {
          for (const element of razones_pref_panaderias_locales) {
            const razon = await PanaderiaPref.findOne({
              where: {
                description: element
              }
            })
            if (razon === null) {
              await PanaderiaPref.save({
                description: element,
                count: 1
              })
            } else {
              razon.count += 1
              await PanaderiaPref.save(razon)
            }
          }
        } catch (e) {
          console.log(e)
        }
      }

      return res.status(201).json({})
      // try {
      //   await Encuesta.save(req.body)
      //   res.status(201).json()
      // } catch (e) {
      //   console.log(e)
      //   res.status(500)
      // }
    })
    return router
  }
}
