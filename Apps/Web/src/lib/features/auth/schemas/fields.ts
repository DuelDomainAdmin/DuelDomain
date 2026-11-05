import { z } from 'zod';

export const emailField = z
    .string()
    .trim()
    .max(254, 'Email must be 254 characters or fewer.')
    .pipe(z.email('Enter a valid email address.'));

export const passwordField = z
    .string()
    .min(8, 'Password must be at least 8 characters.')
    .max(128, 'Password must be 128 characters or fewer.');