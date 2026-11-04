import { apiRequest } from '$lib/server/api/client';
import type { PlayerAvatar } from './types';

interface AuthenticatedContext {
    token: string;
    fetch: typeof fetch;
}

export function getMyAvatar({ token, fetch }: AuthenticatedContext): Promise<PlayerAvatar> {
    return apiRequest<PlayerAvatar>('/player/me/avatar/', { token, fetch });
}

export async function updateMyAvatar(
    avatar: string,
    { token, fetch }: AuthenticatedContext
): Promise<void> {
    await apiRequest<unknown>('/player/me/avatar/', {
        method: 'PUT',
        body: { avatar },
        token,
        fetch
    });
}