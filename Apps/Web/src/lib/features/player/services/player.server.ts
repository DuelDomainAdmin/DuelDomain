import { apiRequest } from '$lib/server/api/client';
import type { PlayerProfile } from '../types';

interface AuthenticatedContext {
    token: string;
    fetch: typeof fetch;
}

export function getMyProfile({ token, fetch }: AuthenticatedContext): Promise<PlayerProfile> {
    return apiRequest<PlayerProfile>('/player/me/', { token, fetch });
}

export function getPlayerById(
    playerId: string,
    { token, fetch }: AuthenticatedContext
): Promise<PlayerProfile> {
    return apiRequest<PlayerProfile>(`/player/${encodeURIComponent(playerId)}/`, { token, fetch });
}