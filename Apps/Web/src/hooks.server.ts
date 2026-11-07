import { redirect, type Handle } from '@sveltejs/kit';
import { ROUTES } from '$lib/config/routes';
import { isAdminProtectedPath, isProtectedPath } from '$lib/config/routes.auth';
import { getAdminSessionToken } from '$lib/features/admin/auth/session.server';
import { getSessionToken } from '$lib/server/session';

export const handle: Handle = async ({ event, resolve }) => {
    event.locals.token = getSessionToken(event.cookies);
    event.locals.adminToken = getAdminSessionToken(event.cookies);

    const { pathname } = event.url;

    if (!event.locals.adminToken && isAdminProtectedPath(pathname)) {
        redirect(303, ROUTES.adminSignIn);
    }

    if (!event.locals.token && isProtectedPath(pathname)) {
        redirect(303, ROUTES.signIn);
    }

    return resolve(event);
};