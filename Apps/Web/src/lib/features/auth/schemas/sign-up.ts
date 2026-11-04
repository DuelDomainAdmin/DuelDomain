import { z } from 'zod';
import { emailField } from './fields';

export const signUpSchema = z
    .object({
        email: emailField,
        username: z
            .string()
            .trim()
            .min(3, 'Username must be at least 3 characters.')
            .max(30, 'Username must be 30 characters or fewer.'),
        password: z
            .string()
            .min(8, 'Password must be at least 8 characters.')
            .max(128, 'Password must be 128 characters or fewer.'),
        confirmPassword: z.string().min(1, 'Confirm your password.')
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match.',
        path: ['confirmPassword']
    });

export type SignUpInput = z.infer<typeof signUpSchema>;

export type SignUpPayload = Omit<SignUpInput, 'confirmPassword'>;