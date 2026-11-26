import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { ROUTES } from '$lib/config/routes';
import { isAdminProtectedPath } from '$lib/config/routes.auth';

export const load: LayoutServerLoad = ({ locals, url }) => {
    if (!locals.adminToken && isAdminProtectedPath(url.pathname)) {
        redirect(303, ROUTES.adminSignIn);
    }
};