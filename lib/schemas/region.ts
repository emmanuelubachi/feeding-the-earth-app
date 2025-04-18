import { z } from 'zod';

export const regionSchema = z.object({
  name: z.string(),
  stat: z.string(),
  image: z.string().url(),
  color: z.string()
});

export const regionsSchema = z.object({
  regions: z.array(regionSchema)
});

export type Region = z.infer<typeof regionSchema>;
export type Regions = z.infer<typeof regionsSchema>;