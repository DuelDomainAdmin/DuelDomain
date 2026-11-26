import { apiRequest } from '$lib/server/api/client';
import type { Game, GameListResponse } from './types';

interface AdminContext {
    token: string;
    fetch: typeof fetch;
}

export async function listGames({ token, fetch }: AdminContext): Promise<Game[]> {
    const response = await apiRequest<GameListResponse>('/game/list/', { token, fetch });
    return response?.games ?? [];
}