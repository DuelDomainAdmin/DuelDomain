import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { ROUTES } from '$lib/config/routes';
import { resetOtpSchema, type ResetOtpInput } from '$lib/features/auth/schemas/reset-otp';
import { forgotPassword } from '$lib/features/auth/services/auth.server';
import { getResetEmail, setResetOtp } from '$lib/features/auth/services/reset-session.server';
import { ApiError } from '$lib/server/api/errors';
import { toFieldErrors, type FieldErrors } from '$lib/utils/form-errors';

const NO_FIELD_ERRORS: FieldErrors<ResetOtpInput> = {};

export const load: PageServerLoad = ({ cookies }) => {
    const email = getResetEmail(cookies);

    if (!email) redirect(303, ROUTES.forgotPassword);

    return { email };
};

export const actions: Actions = {
    verify: async ({ request, cookies }) => {
        if (!getResetEmail(cookies)) redirect(303, ROUTES.forgotPassword);

        const formData = await request.formData();

        const parsed = resetOtpSchema.safeParse({
            otp: String(formData.get('otp') ?? '')
        });

        if (!parsed.success) {
            return fail(400, {
                fieldErrors: toFieldErrors<ResetOtpInput>(parsed.error.issues),
                message: ''
            });
        }

        setResetOtp(cookies, parsed.data.otp);

        redirect(303, ROUTES.changePassword);
    },

    resend: async ({ fetch, cookies }) => {
        const email = getResetEmail(cookies);

        if (!email) redirect(303, ROUTES.forgotPassword);

        try {
            await forgotPassword({ email }, { fetch });
        } catch (error) {
            if (error instanceof ApiError) {
                return fail(error.status, { fieldErrors: NO_FIELD_ERRORS, message: error.message });
            }
            throw error;
        }

        return { resent: true };
    }
};