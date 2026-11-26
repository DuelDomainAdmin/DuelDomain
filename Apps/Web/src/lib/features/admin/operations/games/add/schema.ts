import { z } from 'zod';
import {
    BANNER_ACCEPTED_TYPES,
    BANNER_MAX_BYTES,
    BANNER_MAX_MB,
    PLATFORM_VALUES
} from '../constants';

const matchModeSchema = z.object({
    name: z
        .string()
        .trim()
        .min(1, 'Every match mode needs a name.')
        .max(60, 'Match mode names must be 60 characters or fewer.'),
    description: z
        .string()
        .trim()
        .min(1, 'Every match mode needs a description.')
        .max(300, 'Match mode descriptions must be 300 characters or fewer.')
});

export const addGameSchema = z.object({
    name: z
        .string()
        .trim()
        .min(1, 'Enter the game name.')
        .max(100, 'Game name must be 100 characters or fewer.'),
    description: z
        .string()
        .trim()
        .min(1, 'Enter a game description.')
        .max(1000, 'Description must be 1000 characters or fewer.'),
    platform: z.enum(PLATFORM_VALUES, 'Select a platform.'),
    gameType: z
        .string()
        .trim()
        .toLowerCase()
        .min(1, 'Enter the game type.')
        .max(50, 'Game type must be 50 characters or fewer.'),
    matchModes: z
        .array(matchModeSchema)
        .min(1, 'Add at least one match mode.')
        .max(10, 'Too many match modes.'),
    banner: z
        .instanceof(File, { message: 'Add a banner image.' })
        .refine((file) => file.size > 0, 'Add a banner image.')
        .refine((file) => file.size <= BANNER_MAX_BYTES, `Banner must be ${BANNER_MAX_MB} MB or smaller.`)
        .refine(
            (file) => BANNER_ACCEPTED_TYPES.includes(file.type),
            'Banner must be a PNG, JPEG, or WebP image.'
        )
});

export type AddGameInput = z.infer<typeof addGameSchema>;