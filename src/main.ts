import app from './app.ts'
import config from './config/index.ts'

const HOST = config.HOST || '127.0.0.1'
const PORT = config.PORT || 3000

console.log(`server on at ${HOST}:${PORT}`)
await app.listen(`${HOST}:${PORT}`)
