import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  SSH_HOST: z.coerce.string(),
  SSH_PORT: z.coerce.number(),
  SSH_USERNAME: z.coerce.string(),
  SSH_PASSWORD: z.coerce.string(),
  ROOT_PASSWORD: z.coerce.string()
});

const _env = envSchema.safeParse(process.env);
if (_env.success === false) {
  console.error("Invalid environment variables", _env.error.format());
  throw new Error("Invalid environment variables");
}

export const env = _env.data;
