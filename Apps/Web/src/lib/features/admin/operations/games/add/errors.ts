import type { FieldErrors } from '$lib/utils/form-errors';
import type { AddGameInput } from './schema';

const API_FIELD_MAP: Record<string, keyof AddGameInput> = {
    name: 'name',
    platform: 'platform',
    banner: 'banner',
    game_type: 'gameType',
    match_description: 'description',
    match_modes: 'matchModes'
};

export function mapApiFieldErrors(apiErrors: Record<string, string>): FieldErrors<AddGameInput> {
    const errors: FieldErrors<AddGameInput> = {};

    for (const [key, message] of Object.entries(apiErrors)) {
        const field = API_FIELD_MAP[key];
        if (field) errors[field] = message;
    }

    return errors;
}