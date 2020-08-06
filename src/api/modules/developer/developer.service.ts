import * as developerRepository from './developer.repository.ts'
import { IDeveloper } from './developer.interfaces.ts'

const createDeveloper = async (dev: any) => {
  const developer: IDeveloper = dev
  if (!developer) return false

  const createdDeveloper = await developerRepository.createDeveloper(developer)
  if (!createdDeveloper) return false

  return createdDeveloper
}

const findAllDevelopers = async () => {
  const developers = await developerRepository.findAllDevelopers()
  if (!developers) return false

  return developers
}

export { createDeveloper, findAllDevelopers }
