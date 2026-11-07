import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { ROUTES } from '$lib/config/routes';
import { clearSessionToken } from '$lib/server/session';

export const POST: RequestHandler = ({ cookies }) => {
    clearSessionToken(cookies);
    redirect(303, ROUTES.signIn);
};