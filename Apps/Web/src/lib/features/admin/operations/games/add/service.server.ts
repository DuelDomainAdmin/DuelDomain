import { apiRequest } from '$lib/server/api/client';
import { uploadBanner } from '../banner.server';
import type { CreateGamePayload } from '../types';
import type { AddGameInput } from './schema';

interface AdminContext {
    token: string;
    fetch: typeof fetch;
}

export async function addGame(input: AddGameInput, context: AdminContext): Promise<void> {
    const banner = await uploadBanner(input.banner, context);

    const payload: CreateGamePayload = {
        name: input.name,
        platform: input.platform,
        banner,
        game_type: input.gameType,
        match_description: input.description,
        match_modes: input.matchModes.map((mode) => ({ id: crypto.randomUUID(), ...mode }))
    };

    await apiRequest<unknown>('/game/create/', {
        method: 'POST',
        body: payload,
        token: context.token,
        fetch: context.fetch
    });
}