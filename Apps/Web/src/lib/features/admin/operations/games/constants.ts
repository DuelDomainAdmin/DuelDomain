export const PLATFORM_VALUES = ['mobile', 'pc', 'playstation', 'xbox', 'cross_platform'] as const;

export type Platform = (typeof PLATFORM_VALUES)[number];

export const PLATFORM_OPTIONS: { value: Platform; label: string }[] = [
    { value: 'mobile', label: 'Mobile' },
    { value: 'pc', label: 'PC' },
    { value: 'playstation', label: 'PlayStation' },
    { value: 'xbox', label: 'Xbox' },
    { value: 'cross_platform', label: 'Cross-Platform' }
];

export const MATCH_MODE_LABELS = ['One', 'Two', 'Three'];

export const BANNER_MAX_MB = 4;
export const BANNER_MAX_BYTES = BANNER_MAX_MB * 1024 * 1024;
export const BANNER_ACCEPTED_TYPES = ['image/png', 'image/jpeg', 'image/webp'];