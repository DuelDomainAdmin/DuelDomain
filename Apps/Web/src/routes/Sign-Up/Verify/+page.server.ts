import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { ROUTES } from '$lib/config/routes';
import {
    resendVerificationSchema,
    verifyEmailSchema,
    type VerifyEmailInput
} from '$lib/features/auth/schemas/verify-email';
import { resendVerification, verifyEmail } from '$lib/features/auth/services/auth.server';
import { ApiError } from '$lib/server/api/errors';
import { toFieldErrors, type FieldErrors } from '$lib/utils/form-errors';

const NO_FIELD_ERRORS: FieldErrors<VerifyEmailInput> = {};

export const actions: Actions = {
    verify: async ({ request, fetch }) => {
        const formData = await request.formData();

        const parsed = verifyEmailSchema.safeParse({
            email: String(formData.get('email') ?? ''),
            code: String(formData.get('code') ?? '')
        });

        if (!parsed.success) {
            return fail(400, {
                fieldErrors: toFieldErrors<VerifyEmailInput>(parsed.error.issues),
                message: ''
            });
        }

        try {
            await verifyEmail(parsed.data, { fetch });
        } catch (error) {
            if (error instanceof ApiError) {
                return fail(error.status, {
                    fieldErrors: error.fieldErrors as FieldErrors<VerifyEmailInput>,
                    message: error.message
                });
            }
            throw error;
        }

        redirect(303, ROUTES.signIn);
    },

    resend: async ({ request, fetch }) => {
        const formData = await request.formData();

        const parsed = resendVerificationSchema.safeParse({
            email: String(formData.get('email') ?? '')
        });

        if (!parsed.success) {
            return fail(400, {
                fieldErrors: NO_FIELD_ERRORS,
                message: 'Your session expired. Please sign up again.'
            });
        }

        try {
            await resendVerification(parsed.data, { fetch });
        } catch (error) {
            if (error instanceof ApiError) {
                return fail(error.status, { fieldErrors: NO_FIELD_ERRORS, message: error.message });
            }
            throw error;
        }

        return { resent: true };
    }
};