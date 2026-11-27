import { apiRequest } from '$lib/server/api/client';
import { uploadBanner } from '../banner.server';
import { getGame } from '../service.server';
import type { UpdateGamePayload } from '../types';
import type { UpdateGameInput } from './schema';

interface AdminContext {
    token: string;
    fetch: typeof fetch;
}

export async function updateGame(
    gameId: string,
    input: UpdateGameInput,
    context: AdminContext
): Promise<void> {
    const current = await getGame(gameId, context);
    const banner = input.banner ? await uploadBanner(input.banner, context) : current.banner;

    const payload: UpdateGamePayload = {
        name: input.name,
        platform: input.platform,
        banner,
        game_type: input.gameType,
        match_description: input.description,
        match_modes: input.matchModes.map((mode) => ({
            id: mode.id ?? crypto.randomUUID(),
            name: mode.name,
            description: mode.description
        })),
        is_active: input.isActive
    };

    await apiRequest<unknown>(`/game/${encodeURIComponent(gameId)}/update/`, {
        method: 'PUT',
        body: payload,
        token: context.token,
        fetch: context.fetch
    });
}