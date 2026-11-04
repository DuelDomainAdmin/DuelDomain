import { page } from '$app/state';
import type { PlayerProfile } from './types';

export const user: PlayerProfile = new Proxy({} as PlayerProfile, {
    get: (_target, key) => {
        if (typeof key !== 'string') return undefined;
        return page.data.user?.[key as keyof PlayerProfile];
    }
});