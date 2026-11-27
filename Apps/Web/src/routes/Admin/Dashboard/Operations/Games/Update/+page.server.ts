import type { PageServerLoad } from './$types';
import { loadGamesWithBanners } from '$lib/features/admin/operations/games/load.server';

export const load: PageServerLoad = async ({ locals, fetch, cookies }) => ({
    games: await loadGamesWithBanners({ token: locals.adminToken, fetch, cookies })
});