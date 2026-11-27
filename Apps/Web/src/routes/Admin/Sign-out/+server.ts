import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { clearAdminSessionToken } from '$lib/features/admin/auth/session.server';
import { clearSessionToken } from '$lib/server/session';

export const POST: RequestHandler = ({ cookies, url }) => {
    const scope = url.searchParams.get('scope') === 'admin' ? 'admin' : 'player';

    if (scope === 'admin') {
        clearAdminSessionToken(cookies);
    } else {
        clearSessionToken(cookies);
    }

    return json({ scope }, { headers: { 'Cache-Control': 'no-store' } });
};