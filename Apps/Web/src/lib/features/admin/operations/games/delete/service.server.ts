import { apiRequest } from '$lib/server/api/client';

interface AdminContext {
    token: string;
    fetch: typeof fetch;
}

export async function deleteGame(gameId: string, { token, fetch }: AdminContext): Promise<void> {
    await apiRequest<unknown>(`/game/${encodeURIComponent(gameId)}/delete/`, {
        method: 'DELETE',
        token,
        fetch
    });
}