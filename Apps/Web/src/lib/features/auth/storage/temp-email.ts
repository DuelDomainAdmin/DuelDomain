import { browser } from '$app/environment';

const TEMP_EMAIL_KEY = 'temp_email';

export function getTempEmail(): string | null {
    if (!browser) return null;

    try {
        return sessionStorage.getItem(TEMP_EMAIL_KEY);
    } catch {
        return null;
    }
}

export function setTempEmail(email: string): void {
    if (!browser) return;

    try {
        sessionStorage.setItem(TEMP_EMAIL_KEY, email);
    } catch {
        return;
    }
}

export function clearTempEmail(): void {
    if (!browser) return;

    try {
        sessionStorage.removeItem(TEMP_EMAIL_KEY);
    } catch {
        return;
    }
}