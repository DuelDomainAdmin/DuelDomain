import { dev } from '$app/environment';
import type { Cookies } from '@sveltejs/kit';

const SESSION_COOKIE = 'dd_session';
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

export function getSessionToken(cookies: Cookies): string | null {
    return cookies.get(SESSION_COOKIE) ?? null;
}

export function setSessionToken(cookies: Cookies, token: string): void {
    cookies.set(SESSION_COOKIE, token, {
        path: '/',
        httpOnly: true,
        secure: !dev,
        sameSite: 'lax',
        maxAge: SESSION_MAX_AGE_SECONDS
    });
}

export function clearSessionToken(cookies: Cookies): void {
    cookies.delete(SESSION_COOKIE, { path: '/' });
}