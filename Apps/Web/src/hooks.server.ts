import { redirect, type Handle } from '@sveltejs/kit';
import { ROUTES } from '$lib/config/routes';
import { isProtectedPath } from '$lib/config/routes.auth';
import { getSessionToken } from '$lib/server/session';

export const handle: Handle = async ({ event, resolve }) => {
    event.locals.token = getSessionToken(event.cookies);

    if (!event.locals.token && isProtectedPath(event.url.pathname)) {
        redirect(303, ROUTES.signIn);
    }

    return resolve(event);
};