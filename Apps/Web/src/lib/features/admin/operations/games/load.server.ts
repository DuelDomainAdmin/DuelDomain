import { error, redirect, type Cookies } from '@sveltejs/kit';
import { ROUTES } from '$lib/config/routes';
import { clearAdminSessionToken } from '$lib/features/admin/auth/session.server';
import { ApiError } from '$lib/server/api/errors';
import { resolveMediaUrl } from '$lib/server/api/media';
import { getGame, listGames } from './service.server';
import type { Game } from './types';

interface LoadContext {
    token: string | null;
    fetch: typeof fetch;
    cookies: Cookies;
}

export type GameWithBanner = Game & { bannerSrc: string | null };

function withBanner(game: Game): GameWithBanner {
    return { ...game, bannerSrc: game.banner ? resolveMediaUrl(game.banner) : null };
}

function failLoad(err: unknown, cookies: Cookies): never {
    if (err instanceof ApiError) {
        if (err.status === 401) {
            clearAdminSessionToken(cookies);
            redirect(303, ROUTES.adminSignIn);
        }
        error(err.status, err.message);
    }
    throw err;
}

export async function loadGamesWithBanners({
    token,
    fetch,
    cookies
}: LoadContext): Promise<GameWithBanner[]> {
    if (!token) redirect(303, ROUTES.adminSignIn);

    try {
        const games = await listGames({ token, fetch });
        return games.map(withBanner);
    } catch (err) {
        failLoad(err, cookies);
    }
}

export async function loadGameWithBanner(
    gameId: string,
    { token, fetch, cookies }: LoadContext
): Promise<GameWithBanner> {
    if (!token) redirect(303, ROUTES.adminSignIn);

    try {
        return withBanner(await getGame(gameId, { token, fetch }));
    } catch (err) {
        failLoad(err, cookies);
    }
}