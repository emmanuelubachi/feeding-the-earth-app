import { z } from 'zod';

export const snapshotSchema = z.object({
  stat: z.string(),
  label: z.string(),
  source: z.string()
});

export const snapshotsSchema = z.object({
  snapshots: z.array(snapshotSchema)
});

export type Snapshot = z.infer<typeof snapshotSchema>;
export type Snapshots = z.infer<typeof snapshotsSchema>;