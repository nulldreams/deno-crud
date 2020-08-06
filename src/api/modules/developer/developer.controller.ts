import * as developerService from './developer.service.ts'
import { RouterContext } from 'https://deno.land/x/oak/mod.ts'

const createDeveloper = async ({ request, response }: RouterContext) => {
  const developer = request.body()
  const createdDeveloper = await developerService.createDeveloper(await developer.value)
  if (!createdDeveloper) return errorRequest(response, 'DEVELOPER_WAS_NOT_CREATED')

  return successRequest(response, createdDeveloper)
}

const findAllDevelopers = async ({ request, response }: RouterContext) => {
  const developers = await developerService.findAllDevelopers()
  if (!developers) return errorRequest(response, 'DEVELOPERS_WAS_NOT_FOUND')

  return successRequest(response, developers)
}

const errorRequest = (res: any, message: string) => {
  res.body = { success: false, message }
  res.status = 500

  return res
}

const successRequest = (res: any, data: any) => {
  res.body = { success: true, data }
  res.status = 200

  return res
}

export { createDeveloper, findAllDevelopers }
