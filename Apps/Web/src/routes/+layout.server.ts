import { error, redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { ROUTES } from '$lib/config/routes';
import { getMyProfile } from '$lib/features/player/services/player.server';
import { ApiError } from '$lib/server/api/errors';
import { clearSessionToken } from '$lib/server/session';

export const load: LayoutServerLoad = async ({ locals, fetch, cookies, depends }) => {
    if (!locals.token) redirect(303, ROUTES.signIn);

    depends('app:user');

    try {
        const user = await getMyProfile({ token: locals.token, fetch });
        return { user };
    } catch (err) {
        if (err instanceof ApiError) {
            if (err.status === 401) {
                clearSessionToken(cookies);
                redirect(303, ROUTES.signIn);
            }
            error(err.status, err.message);
        }
        throw err;
    }
};