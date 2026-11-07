const TOKEN_KEYS = ['access_token', 'access', 'token'];

export function extractToken(body: unknown): string | null {
    if (typeof body !== 'object' || body === null) return null;

    for (const key of TOKEN_KEYS) {
        const value = (body as Record<string, unknown>)[key];
        if (typeof value === 'string' && value) return value;
    }

    return null;
}