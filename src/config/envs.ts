import { z } from "zod"
import "dotenv/config"


//This schema validate the environment variables
const envSchema = z.object({
    PORT: z.string().regex(/^\d+$/, 'Port must be a number'),
    DB_HOST: z.string(),
    DB_PORT: z.string().transform((val) => parseInt(val)),
    DB_USER: z.string(),
    DB_PASSWORD: z.string(),
    DB_NAME: z.string(),
    DB_DIALECT:z.string()
})
const validatedEnvVars = envSchema.safeParse(process.env);

//If the environment variables are not valid, we shutdown the server, because may cause errors without them
if (!validatedEnvVars.success) {
    console.error('Invalid environment variables', validatedEnvVars.error.errors);
    process.exit(1); 
  }

const {DB_HOST,DB_NAME,DB_PASSWORD,DB_PORT,DB_USER,PORT, DB_DIALECT} = validatedEnvVars.data

//We export the variables to use them in other files
export {
    PORT,
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_DIALECT
}