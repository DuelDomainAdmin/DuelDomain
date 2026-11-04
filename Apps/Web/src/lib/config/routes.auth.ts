import { ROUTES } from './routes';

export const PROTECTED_ROUTES: string[] = [ROUTES.dashboard, ROUTES.selectAvatar];

function normalize(pathname: string): string {
    let path = pathname;

    try {
        path = decodeURI(pathname);
    } catch {
        path = pathname;
    }

    return path.replace(/\/{2,}/g, '/').toLowerCase();
}

export function isProtectedPath(pathname: string): boolean {
    const path = normalize(pathname);

    return PROTECTED_ROUTES.some((route) => {
        const base = route.toLowerCase();
        return path === base || path.startsWith(`${base}/`);
    });
}