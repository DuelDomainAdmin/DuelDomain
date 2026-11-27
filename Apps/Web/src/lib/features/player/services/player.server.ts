import { apiRequest } from '$lib/server/api/client';
import { toUser } from '$lib/features/user/me/mapper';
import type { PlayerProfileResponse, User } from '$lib/features/user/me/types';

interface AuthenticatedContext {
    token: string;
    fetch: typeof fetch;
}

export async function getPlayerById(
    playerId: string,
    { token, fetch }: AuthenticatedContext
): Promise<User> {
    const profile = await apiRequest<PlayerProfileResponse>(
        `/player/${encodeURIComponent(playerId)}/`,
        { token, fetch }
    );

    return toUser(profile);
}