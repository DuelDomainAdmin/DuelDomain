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

function isWithin(path: string, route: string): boolean {
    const base = route.toLowerCase();
    return path === base || path.startsWith(`${base}/`);
}

export function isProtectedPath(pathname: string): boolean {
    const path = normalize(pathname);
    return PROTECTED_ROUTES.some((route) => isWithin(path, route));
}

export function isAdminProtectedPath(pathname: string): boolean {
    const path = normalize(pathname);
    return isWithin(path, ROUTES.admin) && !isWithin(path, ROUTES.adminSignIn);
}