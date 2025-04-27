import { z } from "zod"

//Esto nos permite validar si están las variables de entorno necesarias 
const envSchema = z.object({
    PORT: z.string().regex(/^\d+$/, 'Port must be a number'),
    DB_HOST: z.string(),
    DB_PORT: z.string().regex(/^\d+$/, 'DB Port must be a number'),
    DB_USER: z.string(),
    DB_PASSWORD: z.string(),
    DB_NAME: z.string(),
})
const validatedEnvVars = envSchema.safeParse(process.env);
if (!validatedEnvVars.success) {
    console.error('Invalid environment variables', validatedEnvVars.error.errors);
    process.exit(1); // Detenemos la aplicación si las variables no son válidas
  }

const {DB_HOST,DB_NAME,DB_PASSWORD,DB_PORT,DB_USER,PORT} = validatedEnvVars.data
export {
    PORT,
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_NAME
}