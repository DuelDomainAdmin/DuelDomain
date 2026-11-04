import { apiRequest } from '$lib/server/api/client';
import type { SignInInput } from '../schemas/sign-in';
import type { SignUpPayload } from '../schemas/sign-up';
import type { ResendVerificationInput, VerifyEmailInput } from '../schemas/verify-email';
import type { SignInResponse } from '../types';

interface RequestContext {
    fetch: typeof fetch;
}

export async function signUp(input: SignUpPayload, { fetch }: RequestContext): Promise<void> {
    await apiRequest<unknown>('/auth/signup/', {
        method: 'POST',
        body: input,
        fetch
    });
}

export function signIn(input: SignInInput, { fetch }: RequestContext): Promise<SignInResponse> {
    return apiRequest<SignInResponse>('/auth/signin/', {
        method: 'POST',
        body: input,
        fetch
    });
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