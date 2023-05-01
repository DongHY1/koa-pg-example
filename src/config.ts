import * as dotenv from 'dotenv'
import { z } from 'zod'

dotenv.config()
const envVarsSchema = z.object({
  PORT: z.string().default('3000'),
})
envVarsSchema.parse(process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVarsSchema> {}
  }
}
export const PORT = process.env.PORT
