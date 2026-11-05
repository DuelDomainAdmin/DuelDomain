import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { ROUTES } from '$lib/config/routes';
import {
    resetPasswordSchema,
    type ResetPasswordInput
} from '$lib/features/auth/schemas/reset-password';
import { resetPassword } from '$lib/features/auth/services/auth.server';
import {
    clearResetSession,
    getResetEmail,
    getResetOtp
} from '$lib/features/auth/services/reset-session.server';
import { ApiError } from '$lib/server/api/errors';
import { toFieldErrors, type FieldErrors } from '$lib/utils/form-errors';

export const load: PageServerLoad = ({ cookies }) => {
    if (!getResetEmail(cookies)) redirect(303, ROUTES.forgotPassword);
    if (!getResetOtp(cookies)) redirect(303, ROUTES.forgotPasswordVerify);
};

export const actions: Actions = {
    default: async ({ request, fetch, cookies }) => {
        const email = getResetEmail(cookies);
        const otp = getResetOtp(cookies);

        if (!email) redirect(303, ROUTES.forgotPassword);
        if (!otp) redirect(303, ROUTES.forgotPasswordVerify);

        const formData = await request.formData();

        const parsed = resetPasswordSchema.safeParse({
            newPassword: String(formData.get('newPassword') ?? ''),
            confirmPassword: String(formData.get('confirmPassword') ?? '')
        });

        if (!parsed.success) {
            return fail(400, {
                fieldErrors: toFieldErrors<ResetPasswordInput>(parsed.error.issues),
                message: ''
            });
        }

        try {
            await resetPassword({ email, otp, new_password: parsed.data.newPassword }, { fetch });
        } catch (error) {
            if (error instanceof ApiError) {
                const fieldErrors: FieldErrors<ResetPasswordInput> = {
                    newPassword: error.fieldErrors.new_password
                };

                return fail(error.status, {
                    fieldErrors,
                    message: error.fieldErrors.otp ?? error.message
                });
            }
            throw error;
        }

        clearResetSession(cookies);

        redirect(303, ROUTES.signIn);
    }
};