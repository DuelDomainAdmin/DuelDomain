import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { ROUTES } from '$lib/config/routes';
import { clearAdminSessionToken } from '$lib/features/admin/auth/session.server';
import { deleteGameSchema } from '$lib/features/admin/operations/games/delete/schema';
import { deleteGame } from '$lib/features/admin/operations/games/delete/service.server';
import { listGames } from '$lib/features/admin/operations/games/service.server';
import { ApiError } from '$lib/server/api/errors';
import { resolveMediaUrl } from '$lib/server/api/media';

export const load: PageServerLoad = async ({ locals, fetch, cookies }) => {
    if (!locals.adminToken) redirect(303, ROUTES.adminSignIn);

    try {
        const games = await listGames({ token: locals.adminToken, fetch });

        return {
            games: games.map((game) => ({
                ...game,
                bannerSrc: game.banner ? resolveMediaUrl(game.banner) : null
            }))
        };
    } catch (err) {
        if (err instanceof ApiError) {
            if (err.status === 401) {
                clearAdminSessionToken(cookies);
                redirect(303, ROUTES.adminSignIn);
            }
            error(err.status, err.message);
        }
        throw err;
    }
};

export const actions: Actions = {
    default: async ({ request, fetch, locals }) => {
        if (!locals.adminToken) redirect(303, ROUTES.adminSignIn);

        const formData = await request.formData();

        const parsed = deleteGameSchema.safeParse({
            gameId: String(formData.get('gameId') ?? '')
        });

        if (!parsed.success) {
            return fail(400, { message: 'Invalid game.' });
        }

        try {
            await deleteGame(parsed.data.gameId, { token: locals.adminToken, fetch });
        } catch (err) {
            if (err instanceof ApiError) {
                return fail(err.status, { message: err.message });
            }
            throw err;
        }

        return { deleted: true };
    }
};