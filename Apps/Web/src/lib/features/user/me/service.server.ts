import { apiRequest } from '$lib/server/api/client';
import { toUser } from './mapper';
import type { PlayerProfileResponse, User } from './types';

interface AuthenticatedContext {
    token: string;
    fetch: typeof fetch;
}

const PROFILE_TIMEOUT_MS = 5_000;

export async function getMe({ token, fetch }: AuthenticatedContext): Promise<User> {
    const profile = await apiRequest<PlayerProfileResponse>('/player/me/', {
        token,
        fetch,
        timeoutMs: PROFILE_TIMEOUT_MS
    });

    return toUser(profile);
}