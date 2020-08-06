import { MongoDatabase } from '../../../database/mongo.database.ts'
import { Collection } from 'https://deno.land/x/mongo@v0.9.2/mod.ts'
import { IDeveloper } from './developer.interfaces.ts'
import config from '../../../config/index.ts'
const COLLECTION = 'developers'

const createDeveloper = async (developer: IDeveloper) => {
  const developerModel = collection(COLLECTION)
  return developerModel.insertOne(developer)
}

const findAllDevelopers = async () => {
  const developerModel = collection(COLLECTION)
  return developerModel.find()
}

const collection = (collection: string): Collection<IDeveloper> => {
  const mongoDatabase = new MongoDatabase(config.MONGO_DATABASE, config.MONGO_URL)
  mongoDatabase.connect()
  return mongoDatabase.getCollection(collection)
}

export { createDeveloper, findAllDevelopers }
