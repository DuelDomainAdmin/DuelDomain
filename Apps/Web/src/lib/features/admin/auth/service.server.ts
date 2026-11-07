import { apiRequest } from '$lib/server/api/client';
import { ApiError } from '$lib/server/api/errors';
import { extractToken } from '$lib/server/api/token';
import type { AdminSignInInput } from './schema';

interface RequestContext {
    fetch: typeof fetch;
}

export async function adminSignIn(
    input: AdminSignInInput,
    { fetch }: RequestContext
): Promise<string> {
    const body = await apiRequest<unknown>('/auth/admin/signin/', {
        method: 'POST',
        body: input,
        fetch
    });

    const token = extractToken(body);

    if (!token) {
        console.error(
            'Admin sign-in response had no token. Keys:',
            typeof body === 'object' && body !== null ? Object.keys(body) : typeof body
        );
        throw new ApiError('Sign-in succeeded but no token was returned.', 502);
    }

    return token;
}