import { z } from 'zod';
import { emailField } from './fields';

export const verifyEmailSchema = z.object({
    email: emailField,
    code: z.string().trim().regex(/^\d{6}$/, 'Enter the 6-digit code.')
});

export const resendVerificationSchema = z.object({
    email: emailField
});

export type VerifyEmailInput = z.infer<typeof verifyEmailSchema>;
export type ResendVerificationInput = z.infer<typeof resendVerificationSchema>;