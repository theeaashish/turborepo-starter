import { getDbEnv } from "@repo/env";
import { neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "./generated/client";
import ws from "ws";

neonConfig.webSocketConstructor = ws;

const env = getDbEnv();
const connectionString = env.DATABASE_URL;

const adapter = new PrismaNeon({ connectionString });

const globalForPrisma = global as unknown as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
