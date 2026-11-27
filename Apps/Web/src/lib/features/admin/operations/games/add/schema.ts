import { z } from 'zod';
import { bannerFileSchema, gameFieldsSchema } from '../fields';

export const addGameSchema = gameFieldsSchema.extend({
    banner: bannerFileSchema
});

export type AddGameInput = z.infer<typeof addGameSchema>;