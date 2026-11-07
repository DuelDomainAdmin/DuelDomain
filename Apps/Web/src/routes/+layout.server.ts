import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { ROUTES } from '$lib/config/routes';
import { isProtectedPath } from '$lib/config/routes.auth';

export const load: LayoutServerLoad = ({ locals, url }) => {
    if (!locals.token && isProtectedPath(url.pathname)) redirect(303, ROUTES.signIn);
};