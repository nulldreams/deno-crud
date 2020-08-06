import * as dotenv from 'https://deno.land/x/dotenv/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'

const __dirname = path.dirname(path.fromFileUrl(import.meta.url))
const envPath = (file: string): string => path.join(__dirname, file)

interface IConfig {
  PORT?: string
  HOST?: string
  MONGO_URL?: string
  MONGO_DATABASE?: string
}

const config: IConfig = dotenv.config({ path: envPath('/envs/.dev.env') })

export default config
