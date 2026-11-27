import { MATCH_MODE_LABELS, PLATFORM_OPTIONS } from './constants';

export function platformLabel(value: string): string {
    return PLATFORM_OPTIONS.find((option) => option.value === value)?.label ?? value;
}

export function matchModeLabel(index: number): string {
    return MATCH_MODE_LABELS[index] ?? String(index + 1);
}