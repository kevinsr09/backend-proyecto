import { config } from 'dotenv'
import { AppDataSource } from './db'
import { app } from './server'
config()

const PORT = process.env.PORT ?? 3001

async function main (): Promise<undefined> {
  app.listen(PORT, () => {
    console.log(`server in port ${PORT}`)
  })

  try {
    await AppDataSource.initialize()
  } catch (e) {
    process.exit(1)
  }
}

main()
  .catch(e => { console.log(e) })
