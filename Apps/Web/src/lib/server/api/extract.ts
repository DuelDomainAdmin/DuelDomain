export function extractString(body: unknown, keys: string[]): string | null {
    if (typeof body !== 'object' || body === null) return null;

    for (const key of keys) {
        const value = (body as Record<string, unknown>)[key];
        if (typeof value === 'string' && value) return value;
    }

    return null;
}