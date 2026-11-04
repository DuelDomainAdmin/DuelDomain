import { z } from 'zod';

export const AVATAR_VALUE_PATTERN = /^dicebear\/img\/[A-Za-z0-9_-]{1,64}$/;

export const selectAvatarSchema = z.object({
    avatar: z.string().trim().regex(AVATAR_VALUE_PATTERN, 'Choose a valid avatar.')
});

export type SelectAvatarInput = z.infer<typeof selectAvatarSchema>;