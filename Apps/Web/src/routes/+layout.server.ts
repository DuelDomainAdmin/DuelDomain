import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { ROUTES } from '$lib/config/routes';
import { isProtectedPath } from '$lib/config/routes.auth';
import { getMe } from '$lib/features/user/me/service.server';
import { ApiError } from '$lib/server/api/errors';
import { clearSessionToken } from '$lib/server/session';

export const load: LayoutServerLoad = async ({ locals, url, fetch, cookies, depends }) => {
    depends('app:user');

    if (!locals.token) return { user: null };

    try {
        return { user: await getMe({ token: locals.token, fetch }) };
    } catch (err) {
        if (err instanceof ApiError && err.status === 401) {
            clearSessionToken(cookies);
            if (isProtectedPath(url.pathname)) redirect(303, ROUTES.signIn);
            return { user: null };
        }

        console.error('Could not load the player profile:', err);
        return { user: null };
    }
};