import { apiRequest } from '$lib/server/api/client';
import type { SignUpPayload } from '../schemas/sign-up';

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