import { BASE_URL } from './client';

export function resolveMediaUrl(reference: string): string {
    if (/^https?:\/\//i.test(reference)) return reference;
    return `${BASE_URL}/${reference.replace(/^\/+/, '')}`;
}