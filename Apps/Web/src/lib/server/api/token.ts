import { extractString } from './extract';

const TOKEN_KEYS = ['access_token', 'access', 'token'];

export function extractToken(body: unknown): string | null {
    return extractString(body, TOKEN_KEYS);
}