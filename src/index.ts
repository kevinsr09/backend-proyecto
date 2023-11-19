import { AppDataSource } from './db'
import { app } from './server'

async function main (): Promise<undefined> {
  app.listen(3000, () => {
    console.log('server in port 3000')
  })

  try {
    await AppDataSource.initialize()
  } catch (e) {
    process.exit(1)
  }
}

main()
  .catch(e => { console.log(e) })
