import { z } from 'zod';
import { emailField } from '$lib/features/auth/schemas/fields';

export const adminSignInSchema = z.object({
    email: emailField,
    password: z
        .string()
        .min(1, 'Enter your password.')
        .max(128, 'Password must be 128 characters or fewer.')
});

export type AdminSignInInput = z.infer<typeof adminSignInSchema>;