import { apiRequest } from '$lib/server/api/client';
import { ApiError } from '$lib/server/api/errors';
import type { Game, GameListResponse } from './types';

interface AdminContext {
    token: string;
    fetch: typeof fetch;
}

export async function listGames({ token, fetch }: AdminContext): Promise<Game[]> {
    const response = await apiRequest<GameListResponse>('/game/list/', { token, fetch });
    return response?.games ?? [];
}

export async function getGame(gameId: string, context: AdminContext): Promise<Game> {
    const games = await listGames(context);
    const game = games.find((item) => item.id === gameId);

    if (!game) throw new ApiError('Game not found.', 404);

    return game;
}