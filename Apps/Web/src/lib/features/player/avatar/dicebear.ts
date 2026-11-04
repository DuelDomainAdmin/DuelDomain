const DICEBEAR_BASE_URL = 'https://api.dicebear.com/7.x';
const DEFAULT_STYLE = 'adventurer-neutral';

export const AVATAR_VALUE_PREFIX = 'dicebear/img/';

export const AVATAR_STYLES = [
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

export function buildAvatarUrl(style: string, seed: string): string {
    return `${DICEBEAR_BASE_URL}/${style}/svg?seed=${encodeURIComponent(seed)}`;
}

export function toAvatarValue(style: string, seed: string): string {
    return `${AVATAR_VALUE_PREFIX}${style}_${seed}`;
}

export function resolveAvatarSrc(value: string | null | undefined): string | null {
    if (!value) return null;

    if (value.startsWith('https://api.dicebear.com/')) return value;
    if (!value.startsWith(AVATAR_VALUE_PREFIX)) return null;

    const id = value.slice(AVATAR_VALUE_PREFIX.length);
    const separator = id.indexOf('_');
    const style = separator > 0 ? id.slice(0, separator) : '';

    if (AVATAR_STYLES.includes(style)) {
        return buildAvatarUrl(style, id.slice(separator + 1));
    }

    return buildAvatarUrl(DEFAULT_STYLE, id);
}