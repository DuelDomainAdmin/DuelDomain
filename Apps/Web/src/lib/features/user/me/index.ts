import { page } from '$app/state';
import type { User } from './types';

export const user: User = new Proxy({} as User, {
    get: (_target, key) => {
        if (typeof key !== 'string') return undefined;
        return page.data.user?.[key as keyof User];
    }
});

export type { User } from './types';