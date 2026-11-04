import { z } from 'zod';

export const emailField = z
    .string()
    .trim()
    .max(254, 'Email must be 254 characters or fewer.')
    .pipe(z.email('Enter a valid email address.'));