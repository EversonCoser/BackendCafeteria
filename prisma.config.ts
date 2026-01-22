import "dotenv/config";
import { defineConfig } from "@prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",

  // @ts-expect-error — migrate is supported by Prisma CLI
  migrate: {
    datasourceUrl: process.env.DATABASE_URL,
  },
});
