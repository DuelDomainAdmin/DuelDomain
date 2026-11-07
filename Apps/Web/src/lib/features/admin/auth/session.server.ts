import { dev } from '$app/environment';
import type { Cookies } from '@sveltejs/kit';

const ADMIN_SESSION_COOKIE = 'dd_admin_session';
const ADMIN_SESSION_MAX_AGE_SECONDS = 60 * 10;

export function getAdminSessionToken(cookies: Cookies): string | null {
    return cookies.get(ADMIN_SESSION_COOKIE) ?? null;
}

export function setAdminSessionToken(cookies: Cookies, token: string): void {
    cookies.set(ADMIN_SESSION_COOKIE, token, {
        path: '/',
        httpOnly: true,
        secure: !dev,
        sameSite: 'lax',
        maxAge: ADMIN_SESSION_MAX_AGE_SECONDS
    });
}

export function clearAdminSessionToken(cookies: Cookies): void {
    cookies.delete(ADMIN_SESSION_COOKIE, { path: '/' });
}