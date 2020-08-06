import { Router } from 'https://deno.land/x/oak/mod.ts'
import { createDeveloper, findAllDevelopers } from './developer.controller.ts'

const router = new Router()

router.post('/developers', createDeveloper)
router.get('/developers', findAllDevelopers)

export { router }
