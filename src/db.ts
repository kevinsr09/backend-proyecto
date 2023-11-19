import { DataSource } from 'typeorm'
import 'reflect-metadata'
import { Encuesta } from './entities/encuesta'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'ep-holy-frog-41641602.us-east-2.aws.neon.fl0.io',
  port: 5432,
  username: 'fl0user',
  password: 'hu9J3nZeqpoM',
  database: 'proyecto',
  synchronize: true,
  logging: true,
  ssl: { rejectUnauthorized: false },
  entities: [Encuesta],
  subscribers: [],
  migrations: []
})
