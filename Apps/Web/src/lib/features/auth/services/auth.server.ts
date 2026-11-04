import { apiRequest } from '$lib/server/api/client';
import { ApiError } from '$lib/server/api/errors';
import type { SignInInput } from '../schemas/sign-in';
import type { SignUpPayload } from '../schemas/sign-up';
import type { ResendVerificationInput, VerifyEmailInput } from '../schemas/verify-email';

interface RequestContext {
    fetch: typeof fetch;
}

const TOKEN_KEYS = ['access_token', 'access', 'token'];

function extractToken(body: unknown): string | null {
    if (typeof body !== 'object' || body === null) return null;

    for (const key of TOKEN_KEYS) {
        const value = (body as Record<string, unknown>)[key];
        if (typeof value === 'string' && value) return value;
    }

    return null;
}

export async function signUp(input: SignUpPayload, { fetch }: RequestContext): Promise<void> {
    await apiRequest<unknown>('/auth/signup/', {
        method: 'POST',
        body: input,
        fetch
    });
}

export async function signIn(input: SignInInput, { fetch }: RequestContext): Promise<string> {
    const body = await apiRequest<unknown>('/auth/signin/', {
        method: 'POST',
        body: input,
        fetch
    });

    const token = extractToken(body);

    if (!token) {
        console.error(
            'Sign-in response had no token. Keys:',
            typeof body === 'object' && body !== null ? Object.keys(body) : typeof body
        );
        throw new ApiError('Sign-in succeeded but no token was returned.', 502);
    }

    return token;
}

export async function verifyEmail(input: VerifyEmailInput, { fetch }: RequestContext): Promise<void> {
    await apiRequest<unknown>('/auth/verify-email/', {
        method: 'POST',
        body: input,
        fetch
    });
}

export async function resendVerification(
    input: ResendVerificationInput,
    { fetch }: RequestContext
): Promise<void> {
    await apiRequest<unknown>('/auth/resend-verification/', {
        method: 'POST',
        body: input,
        fetch
    });
}