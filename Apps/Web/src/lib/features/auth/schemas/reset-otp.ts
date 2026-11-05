import { z } from 'zod';

export const resetOtpSchema = z.object({
    otp: z.string().trim().regex(/^\d{6}$/, 'Enter the 6-digit code.')
});

export type ResetOtpInput = z.infer<typeof resetOtpSchema>;