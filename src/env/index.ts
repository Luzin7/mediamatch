import { string, z } from "zod";

const envSchema = z.object({
  DATABASE_URL: string().url(),
  PORT: string().max(4).min(4),
  NODE_ENV: string(),
});

export const env = envSchema.parse(process.env);
