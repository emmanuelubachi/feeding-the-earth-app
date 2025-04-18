import { z } from 'zod';

export const insightSchema = z.object({
  iconName: z.string(),
  stat: z.string(),
  description: z.string(),
  color: z.string()
});

export const insightsSchema = z.object({
  insights: z.array(insightSchema)
});

export type Insight = z.infer<typeof insightSchema>;
export type Insights = z.infer<typeof insightsSchema>;