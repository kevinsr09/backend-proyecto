import { DataSource } from 'typeorm'
import 'reflect-metadata'
import { Encuesta } from './entities/encuesta'
import { config } from 'dotenv'
import { PanesFav } from './entities/PanesFav'
import { PanaderiaPref } from './entities/RazonesPrefPanaderia'
config()

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  ssl: { rejectUnauthorized: false },
  entities: [Encuesta, PanesFav, PanaderiaPref],
  subscribers: [],
  migrations: []
})
