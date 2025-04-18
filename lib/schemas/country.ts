import { z } from 'zod';

export const countrySummarySchema = z.object({
  population: z.string(),
  region: z.string(),
  undernourished: z.string(),
  agLand: z.string(),
  gdpPerCapita: z.string(),
  climateRisk: z.string()
});

export const countryThemesSchema = z.object({
  production: z.object({
    headline: z.string(),
    topCrops: z.array(z.string()),
    output: z.string(),
    growth: z.string()
  }),
  consumption: z.object({
    calories: z.string(),
    staples: z.string(),
    protein: z.string()
  }),
  trade: z.object({
    balance: z.string(),
    exports: z.string(),
    imports: z.string()
  }),
  nutrition: z.object({
    stunting: z.string(),
    wasting: z.string(),
    obesity: z.string()
  }),
  climate: z.object({
    emissions: z.string(),
    drought: z.string(),
    adaptation: z.string()
  })
});

export const countrySchema = z.object({
  name: z.string(),
  flag: z.string(),
  summary: countrySummarySchema,
  themes: countryThemesSchema
});

export type CountrySummary = z.infer<typeof countrySummarySchema>;
export type CountryThemes = z.infer<typeof countryThemesSchema>;
export type Country = z.infer<typeof countrySchema>;