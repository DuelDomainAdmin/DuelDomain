import { AVATAR_STYLES, buildAvatarUrl, toAvatarValue } from './dicebear';
import type { AvatarOption } from './types';

const AVATAR_COUNT = 10;

function randomSeed(): string {
    return Math.random().toString(36).slice(2, 10);
}

function randomStyle(): string {
    return AVATAR_STYLES[Math.floor(Math.random() * AVATAR_STYLES.length)];
}

export function generateAvatars(count = AVATAR_COUNT): AvatarOption[] {
    return Array.from({ length: count }, (_, index) => {
        const style = randomStyle();
        const seed = randomSeed();

        return {
            src: buildAvatarUrl(style, seed),
            value: toAvatarValue(style, seed),
            alt: `Avatar ${index + 1}`,
            fallback: `A${index + 1}`
        };
    });
}