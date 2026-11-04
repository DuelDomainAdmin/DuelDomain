import { z } from 'zod';

export const signInSchema = z.object({
    email: z
        .string()
        .trim()
        .min(1, 'Enter your email or username.')
        .max(254, 'Email or username must be 254 characters or fewer.'),
    password: z
        .string()
        .min(1, 'Enter your password.')
        .max(128, 'Password must be 128 characters or fewer.')
});

export type SignInInput = z.infer<typeof signInSchema>;