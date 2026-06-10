import { z } from "zod";

export const dbEnvSchema = z.object({
  DATABASE_URL: z.string().url(),
});

export const getDbEnv = () => {
  return dbEnvSchema.parse({
    DATABASE_URL: process.env.DATABASE_URL,
  });
};
