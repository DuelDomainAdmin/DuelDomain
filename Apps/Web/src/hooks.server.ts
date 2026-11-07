import { redirect, type Handle } from '@sveltejs/kit';
import { ROUTES } from '$lib/config/routes';
import { isAdminProtectedPath, isProtectedPath } from '$lib/config/routes.auth';
import { getAdminSessionToken } from '$lib/features/admin/auth/session.server';
import { getSessionToken } from '$lib/server/session';

export const handle: Handle = async ({ event, resolve }) => {
    event.locals.token = getSessionToken(event.cookies);
    event.locals.adminToken = getAdminSessionToken(event.cookies);

    const { pathname } = event.url;
    const isAdminPath = isAdminProtectedPath(pathname);
    const isPlayerPath = isProtectedPath(pathname);

    if (isAdminPath && !event.locals.adminToken) redirect(303, ROUTES.adminSignIn);
    if (isPlayerPath && !event.locals.token) redirect(303, ROUTES.signIn);

    const response = await resolve(event);

    if (isAdminPath || isPlayerPath) {
        response.headers.set('Cache-Control', 'no-store');
    }

    return response;
};