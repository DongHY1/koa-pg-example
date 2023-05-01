import * as dotenv from 'dotenv'
import { z } from 'zod'

dotenv.config()
const envVarsSchema = z.object({
  PORT: z.string().default('3000'),
  DATABASE_USER: z.string(),
  DATABASE_HOST: z.string(),
  DATABASE_NAME: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_PORT: z.string(),
})
envVarsSchema.parse(process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVarsSchema> {}
  }
}
export const PORT = process.env.PORT
export const DATABASE_HOST = process.env.DATABASE_HOST
export const DATABASE_PORT = parseInt(process.env.DATABASE_PORT)
export const DATABASE_USER = process.env.DATABASE_USER
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD
export const DATABASE_NAME = process.env.DATABASE_NAME
