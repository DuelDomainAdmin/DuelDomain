import { z } from 'zod';

export const deleteGameSchema = z.object({
    gameId: z.string().trim().regex(/^[A-Za-z0-9_-]{1,64}$/, 'Invalid game.')
});

export type DeleteGameInput = z.infer<typeof deleteGameSchema>;