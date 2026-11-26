import { apiRequest } from '$lib/server/api/client';
import { ApiError } from '$lib/server/api/errors';
import { extractString } from '$lib/server/api/extract';
import type { CreateGamePayload } from '../types';
import type { AddGameInput } from './schema';

interface AdminContext {
    token: string;
    fetch: typeof fetch;
}

const BANNER_KEYS = ['banner', 'url', 'path', 'file', 'image'];
const UPLOAD_TIMEOUT_MS = 30_000;

async function uploadBanner(file: File, { token, fetch }: AdminContext): Promise<string> {
    const body = new FormData();
    body.append('file', file);

    const response = await apiRequest<unknown>('/game/banner/upload/', {
        method: 'POST',
        body,
        token,
        fetch,
        timeoutMs: UPLOAD_TIMEOUT_MS
    });

    const banner = extractString(response, BANNER_KEYS);

    if (!banner) {
        console.error(
            'Banner upload response had no file reference. Keys:',
            typeof response === 'object' && response !== null ? Object.keys(response) : typeof response
        );
        throw new ApiError('Banner uploaded but no file reference was returned.', 502);
    }

    return banner;
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