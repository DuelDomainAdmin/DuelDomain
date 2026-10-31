import type { z } from 'zod';

export type FieldErrors<T> = Partial<Record<keyof T, string>>;

export function toFieldErrors<T>(issues: z.core.$ZodIssue[]): FieldErrors<T> {
    const errors: FieldErrors<T> = {};

    for (const issue of issues) {
        const field = issue.path[0] as keyof T;
        if (!(field in errors)) errors[field] = issue.message;
    }

    return errors;
}