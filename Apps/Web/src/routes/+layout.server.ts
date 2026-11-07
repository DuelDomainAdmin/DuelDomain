import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { ROUTES } from '$lib/config/routes';

export const load: LayoutServerLoad = ({ locals }) => {
    if (!locals.token) redirect(303, ROUTES.signIn);
};