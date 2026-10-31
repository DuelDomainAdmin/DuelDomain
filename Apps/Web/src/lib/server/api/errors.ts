export class ApiError extends Error {
    readonly status: number;
    readonly fieldErrors: Record<string, string>;

    constructor(message: string, status: number, fieldErrors: Record<string, string> = {}) {
        super(message);
        this.name = 'ApiError';
        this.status = status;
        this.fieldErrors = fieldErrors;
    }
}

interface ValidationItem {
    loc?: unknown[];
    msg?: string;
}

const FALLBACK_MESSAGE = 'Something went wrong. Please try again.';

export function parseErrorBody(status: number, body: unknown): ApiError {
    const detail = (body as { detail?: unknown } | null)?.detail;

    if (typeof detail === 'string') {
        return new ApiError(detail, status);
    }

    if (Array.isArray(detail)) {
        const fieldErrors: Record<string, string> = {};

        for (const item of detail as ValidationItem[]) {
            const field = item.loc?.[item.loc.length - 1];
            if (typeof field === 'string' && item.msg && !(field in fieldErrors)) {
                fieldErrors[field] = item.msg;
            }
        }

        const message = Object.keys(fieldErrors).length
            ? 'Please correct the highlighted fields.'
            : FALLBACK_MESSAGE;

        return new ApiError(message, status, fieldErrors);
    }

    return new ApiError(FALLBACK_MESSAGE, status);
}