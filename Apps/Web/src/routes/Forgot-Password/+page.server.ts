import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { ROUTES } from '$lib/config/routes';
import {
    forgotPasswordSchema,
    type ForgotPasswordInput
} from '$lib/features/auth/schemas/forgot-password';
import { forgotPassword } from '$lib/features/auth/services/auth.server';
import { clearResetSession, setResetEmail } from '$lib/features/auth/services/reset-session.server';
import { ApiError } from '$lib/server/api/errors';
import { toFieldErrors, type FieldErrors } from '$lib/utils/form-errors';

export const actions: Actions = {
    default: async ({ request, fetch, cookies }) => {
        const formData = await request.formData();

        const raw = { email: String(formData.get('email') ?? '') };
        const values = { email: raw.email };

        const parsed = forgotPasswordSchema.safeParse(raw);

        if (!parsed.success) {
            return fail(400, {
                values,
                fieldErrors: toFieldErrors<ForgotPasswordInput>(parsed.error.issues),
                message: ''
            });
        }

        try {
            await forgotPassword(parsed.data, { fetch });
        } catch (error) {
            if (error instanceof ApiError) {
                return fail(error.status, {
                    values,
                    fieldErrors: error.fieldErrors as FieldErrors<ForgotPasswordInput>,
                    message: error.message
                });
            }
            throw error;
        }

        clearResetSession(cookies);
        setResetEmail(cookies, parsed.data.email);

        redirect(303, ROUTES.forgotPasswordVerify);
    }
};