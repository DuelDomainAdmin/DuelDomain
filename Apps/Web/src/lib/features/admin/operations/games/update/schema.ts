import { z } from 'zod';
import { bannerFileSchema, gameFieldsSchema, matchModeSchema } from '../fields';

const existingMatchModeSchema = matchModeSchema.extend({
    id: z
        .string()
        .regex(/^[A-Za-z0-9_-]{1,64}$/)
        .optional()
});

export const updateGameSchema = gameFieldsSchema.extend({
    matchModes: z
        .array(existingMatchModeSchema)
        .min(1, 'Add at least one match mode.')
        .max(10, 'Too many match modes.'),
    banner: bannerFileSchema.optional(),
    isActive: z.boolean()
});

export type UpdateGameInput = z.infer<typeof updateGameSchema>;