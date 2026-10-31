import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { ROUTES } from '$lib/config/routes';
import { signUpSchema, type SignUpInput } from '$lib/features/auth/schemas/sign-up';
import { signUp } from '$lib/features/auth/services/auth.server';
import { ApiError } from '$lib/server/api/errors';
import { toFieldErrors, type FieldErrors } from '$lib/utils/form-errors';

export const actions: Actions = {
    default: async ({ request, fetch }) => {
        const formData = await request.formData();

        const raw = {
            email: String(formData.get('email') ?? ''),
            username: String(formData.get('username') ?? ''),
            password: String(formData.get('password') ?? '')
        };

        const values = { email: raw.email, username: raw.username };

        const parsed = signUpSchema.safeParse(raw);

        if (!parsed.success) {
            return fail(400, {
                values,
                fieldErrors: toFieldErrors<SignUpInput>(parsed.error.issues),
                message: ''
            });
        }

        try {
            await signUp(parsed.data, { fetch });
        } catch (error) {
            if (error instanceof ApiError) {
                return fail(error.status, {
                    values,
                    fieldErrors: error.fieldErrors as FieldErrors<SignUpInput>,
                    message: error.message
                });
            }
            throw error;
        }

        redirect(303, ROUTES.signIn);
    }
};