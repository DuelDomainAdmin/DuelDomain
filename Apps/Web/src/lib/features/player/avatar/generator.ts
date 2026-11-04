import type { AvatarOption } from './types';

export const AVATAR_URL_PREFIX = 'https://api.dicebear.com/';

const AVATAR_VERSION = '7.x';
const AVATAR_COUNT = 10;

const AVATAR_STYLES = [
    'adventurer',
    'adventurer-neutral',
    'avataaars',
    'big-smile',
    'bottts',
    'fun-emoji',
    'lorelei',
    'micah',
    'miniavs',
    'pixel-art'
];

function randomSeed(): string {
    return Math.random().toString(36).slice(2, 10);
}

function randomStyle(): string {
    return AVATAR_STYLES[Math.floor(Math.random() * AVATAR_STYLES.length)];
}

export function generateAvatars(count = AVATAR_COUNT): AvatarOption[] {
    return Array.from({ length: count }, (_, index) => ({
        src: `${AVATAR_URL_PREFIX}${AVATAR_VERSION}/${randomStyle()}/svg?seed=${randomSeed()}`,
        alt: `Avatar ${index + 1}`,
        fallback: `A${index + 1}`
    }));
}