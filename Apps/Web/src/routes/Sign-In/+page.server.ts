import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { ROUTES } from '$lib/config/routes';
import { signInSchema, type SignInInput } from '$lib/features/auth/schemas/sign-in';
import { signIn } from '$lib/features/auth/services/auth.server';
import { getMyAvatar } from '$lib/features/player/avatar/service.server';
import { ApiError } from '$lib/server/api/errors';
import { setSessionToken } from '$lib/server/session';
import { toFieldErrors, type FieldErrors } from '$lib/utils/form-errors';

export const load: PageServerLoad = ({ locals }) => {
    if (locals.token) redirect(303, ROUTES.dashboard);
};

export const actions: Actions = {
    default: async ({ request, fetch, cookies }) => {
        const formData = await request.formData();

        const raw = {
            email: String(formData.get('email') ?? ''),
            password: String(formData.get('password') ?? '')
        };

        const values = { email: raw.email };

        const parsed = signInSchema.safeParse(raw);

        if (!parsed.success) {
            return fail(400, {
                values,
                fieldErrors: toFieldErrors<SignInInput>(parsed.error.issues),
                message: ''
            });
        }

        let destination: string;

        try {
            const { access_token } = await signIn(parsed.data, { fetch });
            const { avatar_selected } = await getMyAvatar({ token: access_token, fetch });

            setSessionToken(cookies, access_token);
            destination = avatar_selected ? ROUTES.dashboard : ROUTES.selectAvatar;
        } catch (error) {
            if (error instanceof ApiError) {
                return fail(error.status, {
                    values,
                    fieldErrors: error.fieldErrors as FieldErrors<SignInInput>,
                    message: error.message
                });
            }
            throw error;
        }

        redirect(303, destination);
    }
};