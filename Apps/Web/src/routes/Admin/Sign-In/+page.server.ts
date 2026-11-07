import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { ROUTES } from '$lib/config/routes';
import { adminSignInSchema, type AdminSignInInput } from '$lib/features/admin/auth/schema';
import { adminSignIn } from '$lib/features/admin/auth/service.server';
import { setAdminSessionToken } from '$lib/features/admin/auth/session.server';
import { ApiError } from '$lib/server/api/errors';
import { toFieldErrors, type FieldErrors } from '$lib/utils/form-errors';

export const load: PageServerLoad = ({ locals }) => {
    if (locals.adminToken) redirect(303, ROUTES.adminDashboard);
};

export const actions: Actions = {
    default: async ({ request, fetch, cookies }) => {
        const formData = await request.formData();

        const raw = {
            email: String(formData.get('email') ?? ''),
            password: String(formData.get('password') ?? '')
        };

        const values = { email: raw.email };

        const parsed = adminSignInSchema.safeParse(raw);

        if (!parsed.success) {
            return fail(400, {
                values,
                fieldErrors: toFieldErrors<AdminSignInInput>(parsed.error.issues),
                message: ''
            });
        }

        try {
            const token = await adminSignIn(parsed.data, { fetch });
            setAdminSessionToken(cookies, token);
        } catch (error) {
            if (error instanceof ApiError) {
                return fail(error.status, {
                    values,
                    fieldErrors: error.fieldErrors as FieldErrors<AdminSignInInput>,
                    message: error.message
                });
            }
            throw error;
        }

        redirect(303, ROUTES.adminDashboard);
    }
};