import type { Reroute } from '@sveltejs/kit';
import { ROUTES } from '$lib/config/routes';

const CANONICAL_PATHS = new Map(
    Object.values(ROUTES).map((path): [string, string] => [path.toLowerCase(), path])
);

export const reroute: Reroute = ({ url }) => {
    return CANONICAL_PATHS.get(url.pathname.toLowerCase());
};