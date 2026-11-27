import type { FieldErrors } from '$lib/utils/form-errors';

const API_FIELD_MAP: Record<string, string> = {
    name: 'name',
    platform: 'platform',
    banner: 'banner',
    game_type: 'gameType',
    match_description: 'description',
    match_modes: 'matchModes',
    is_active: 'isActive'
};

export function mapApiFieldErrors<T>(apiErrors: Record<string, string>): FieldErrors<T> {
    const errors: Record<string, string> = {};

    for (const [key, message] of Object.entries(apiErrors)) {
        const field = API_FIELD_MAP[key];
        if (field) errors[field] = message;
    }

    return errors as FieldErrors<T>;
}