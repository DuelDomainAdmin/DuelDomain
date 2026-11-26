import { PLATFORM_OPTIONS } from './constants';

export function platformLabel(value: string): string {
    return PLATFORM_OPTIONS.find((option) => option.value === value)?.label ?? value;
}