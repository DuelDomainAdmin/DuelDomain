import { dev } from '$app/environment';
import type { Cookies } from '@sveltejs/kit';

const EMAIL_COOKIE = 'dd_reset_email';
const OTP_COOKIE = 'dd_reset_otp';
const RESET_MAX_AGE_SECONDS = 60 * 15;

const RESET_COOKIE_OPTIONS = {
    path: '/',
    httpOnly: true,
    secure: !dev,
    sameSite: 'lax',
    maxAge: RESET_MAX_AGE_SECONDS
} as const;

export function getResetEmail(cookies: Cookies): string | null {
    return cookies.get(EMAIL_COOKIE) ?? null;
}

export function setResetEmail(cookies: Cookies, email: string): void {
    cookies.set(EMAIL_COOKIE, email, RESET_COOKIE_OPTIONS);
}

export function getResetOtp(cookies: Cookies): string | null {
    return cookies.get(OTP_COOKIE) ?? null;
}

export function setResetOtp(cookies: Cookies, otp: string): void {
    cookies.set(OTP_COOKIE, otp, RESET_COOKIE_OPTIONS);
}

export function clearResetSession(cookies: Cookies): void {
    cookies.delete(EMAIL_COOKIE, { path: '/' });
    cookies.delete(OTP_COOKIE, { path: '/' });
}