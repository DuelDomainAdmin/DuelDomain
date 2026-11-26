import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { ROUTES } from '$lib/config/routes';
import { mapApiFieldErrors } from '$lib/features/admin/operations/games/add/errors';
import { addGameSchema, type AddGameInput } from '$lib/features/admin/operations/games/add/schema';
import { addGame } from '$lib/features/admin/operations/games/add/service.server';
import { ApiError } from '$lib/server/api/errors';
import { toFieldErrors } from '$lib/utils/form-errors';

function readMatchModes(formData: FormData) {
    const names = formData.getAll('matchModeName').map(String);
    const descriptions = formData.getAll('matchModeDescription').map(String);

    return names
        .map((name, index) => ({ name, description: descriptions[index] ?? '' }))
        .filter((mode) => mode.name.trim() || mode.description.trim());
}

export const actions: Actions = {
    default: async ({ request, fetch, locals }) => {
        if (!locals.adminToken) redirect(303, ROUTES.adminSignIn);

        const formData = await request.formData();

        const parsed = addGameSchema.safeParse({
            name: String(formData.get('name') ?? ''),
            description: String(formData.get('description') ?? ''),
            platform: String(formData.get('platform') ?? ''),
            gameType: String(formData.get('gameType') ?? ''),
            matchModes: readMatchModes(formData),
            banner: formData.get('banner')
        });

        if (!parsed.success) {
            return fail(400, {
                fieldErrors: toFieldErrors<AddGameInput>(parsed.error.issues),
                message: ''
            });
        }

        try {
            await addGame(parsed.data, { token: locals.adminToken, fetch });
        } catch (error) {
            if (error instanceof ApiError) {
                return fail(error.status, {
                    fieldErrors: mapApiFieldErrors(error.fieldErrors),
                    message: error.message
                });
            }
            throw error;
        }

        return { success: true };
    }
};