import { z } from 'zod';
import { AVATAR_URL_PREFIX } from './generator';

export const selectAvatarSchema = z.object({
    avatar: z
        .string()
        .trim()
        .min(1, 'Choose an avatar.')
        .max(255, 'Avatar value is too long.')
        .startsWith(AVATAR_URL_PREFIX, 'Choose a valid avatar.')
});

export type SelectAvatarInput = z.infer<typeof selectAvatarSchema>;