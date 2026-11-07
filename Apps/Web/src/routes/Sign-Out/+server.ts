import type { RequestHandler } from './$types';
import { clearSessionToken } from '$lib/server/session';

export const POST: RequestHandler = ({ cookies }) => {
    clearSessionToken(cookies);
    return new Response(null, { status: 204 });
};