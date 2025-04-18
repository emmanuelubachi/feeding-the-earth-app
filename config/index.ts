import { z } from "zod";

export const config = {
  app: {
    name: "Feeding the Earth",
    description: "A data-driven platform for understanding global food systems",
  },
  data: {
    paths: {
      themes: "data/themes.json",
      regions: "data/regions.json",
      insights: "data/insights.json",
      snapshots: "data/snapshots.json",
      countries: "data/countries",
    },
  },
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "",
  },
} as const;

// Validate environment variables
const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().optional(),
});

try {
  envSchema.parse(process.env);
} catch (error) {
  console.error("Invalid environment variables:", error);
}

export type Config = typeof config;
