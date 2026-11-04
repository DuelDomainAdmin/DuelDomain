import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { ROUTES } from '$lib/config/routes';
import { selectAvatarSchema, type SelectAvatarInput } from '$lib/features/player/avatar/schema';
import { updateMyAvatar } from '$lib/features/player/avatar/service.server';
import { ApiError } from '$lib/server/api/errors';
import { toFieldErrors, type FieldErrors } from '$lib/utils/form-errors';

export const actions: Actions = {
    default: async ({ request, fetch, locals }) => {
        if (!locals.token) redirect(303, ROUTES.signIn);

        const formData = await request.formData();

        const parsed = selectAvatarSchema.safeParse({
            avatar: String(formData.get('avatar') ?? '')
        });

        if (!parsed.success) {
            const fieldErrors = toFieldErrors<SelectAvatarInput>(parsed.error.issues);
            return fail(400, { fieldErrors, message: fieldErrors.avatar ?? '' });
        }

        try {
            await updateMyAvatar(parsed.data.avatar, { token: locals.token, fetch });
        } catch (error) {
            if (error instanceof ApiError) {
                return fail(error.status, {
                    fieldErrors: error.fieldErrors as FieldErrors<SelectAvatarInput>,
                    message: error.message
                });
            }
            throw error;
        }

        redirect(303, ROUTES.dashboard);
    }
};