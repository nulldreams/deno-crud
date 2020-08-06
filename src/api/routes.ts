import * as developer from './modules/developer/developer.routes.ts'
import { Application } from 'https://deno.land/x/oak/mod.ts'

const defineRoutes = (app: Application) => {
  app.use(developer.router.routes())
}

export { defineRoutes }
