import { Application } from 'https://deno.land/x/oak/mod.ts'
import { defineRoutes } from './api/routes.ts'
const app = new Application()

defineRoutes(app)

export default app
