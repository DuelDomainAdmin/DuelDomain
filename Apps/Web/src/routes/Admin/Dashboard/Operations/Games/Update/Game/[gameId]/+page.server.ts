import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { ROUTES } from '$lib/config/routes';
import { mapApiFieldErrors } from '$lib/features/admin/operations/games/errors';
import { readMatchModes } from '$lib/features/admin/operations/games/form';
import { loadGameWithBanner } from '$lib/features/admin/operations/games/load.server';
import {
    updateGameSchema,
    type UpdateGameInput
} from '$lib/features/admin/operations/games/update/schema';
import { updateGame } from '$lib/features/admin/operations/games/update/service.server';
import { ApiError } from '$lib/server/api/errors';
import { toFieldErrors } from '$lib/utils/form-errors';

export const load: PageServerLoad = async ({ params, locals, fetch, cookies }) => ({
    game: await loadGameWithBanner(params.gameId, { token: locals.adminToken, fetch, cookies })
});

export const actions: Actions = {
    default: async ({ request, params, fetch, locals }) => {
        if (!locals.adminToken) redirect(303, ROUTES.adminSignIn);

        const formData = await request.formData();
        const banner = formData.get('banner');

        const parsed = updateGameSchema.safeParse({
            name: String(formData.get('name') ?? ''),
            description: String(formData.get('description') ?? ''),
            platform: String(formData.get('platform') ?? ''),
            gameType: String(formData.get('gameType') ?? ''),
            matchModes: readMatchModes(formData),
            isActive: formData.get('isActive') === 'on',
            banner: banner instanceof File && banner.size > 0 ? banner : undefined
        });

        if (!parsed.success) {
            return fail(400, {
                fieldErrors: toFieldErrors<UpdateGameInput>(parsed.error.issues),
                message: ''
            });
        }

        try {
            await updateGame(params.gameId, parsed.data, { token: locals.adminToken, fetch });
        } catch (error) {
            if (error instanceof ApiError) {
                return fail(error.status, {
                    fieldErrors: mapApiFieldErrors<UpdateGameInput>(error.fieldErrors),
                    message: error.message
                });
            }
            throw error;
        }

        redirect(303, ROUTES.adminUpdateGames);
    }
};