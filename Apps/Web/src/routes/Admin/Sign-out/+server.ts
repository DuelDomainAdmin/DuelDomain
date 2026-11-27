import type { RequestHandler } from './$types';
import { clearAdminSessionToken } from '$lib/features/admin/auth/session.server';
import { clearSessionToken } from '$lib/server/session';

export const POST: RequestHandler = ({ cookies, url }) => {
    if (url.searchParams.get('scope') === 'admin') {
        clearAdminSessionToken(cookies);
    } else {
        clearSessionToken(cookies);
    }

    return new Response(null, { status: 204 });
};