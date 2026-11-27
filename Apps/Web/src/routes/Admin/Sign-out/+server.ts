import type { RequestHandler } from './$types';
import { clearAdminSessionToken } from '$lib/features/admin/auth/session.server';

export const POST: RequestHandler = ({ cookies }) => {
    clearAdminSessionToken(cookies);
    return new Response(null, { status: 204 });
};