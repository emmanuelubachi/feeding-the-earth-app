import { z } from 'zod';

export const themeSchema = z.object({
  title: z.string(),
  iconName: z.string(),
  description: z.string(),
  color: z.string(),
  link: z.string()
});

export const themesSchema = z.object({
  themes: z.array(themeSchema)
});

export type Theme = z.infer<typeof themeSchema>;
export type Themes = z.infer<typeof themesSchema>;