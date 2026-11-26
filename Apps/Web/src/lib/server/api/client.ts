import { API_BASE_URL } from '$env/static/private';
import { ApiError, parseErrorBody } from './errors';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface RequestOptions {
    method?: HttpMethod;
    body?: unknown;
    headers?: Record<string, string>;
    token?: string;
    timeoutMs?: number;
    fetch?: typeof fetch;
}

const DEFAULT_TIMEOUT_MS = 10_000;
export const BASE_URL = API_BASE_URL.replace(/\/+$/, '');

function serializeBody(body: unknown): BodyInit | undefined {
    if (body === undefined) return undefined;
    if (body instanceof FormData) return body;
    return JSON.stringify(body);
}

export async function apiRequest<T>(
    path: string,
    {
        method = 'GET',
        body,
        headers = {},
        token,
        timeoutMs = DEFAULT_TIMEOUT_MS,
        fetch: fetcher = fetch
    }: RequestOptions = {}
): Promise<T> {
    let response: Response;

    try {
        response = await fetcher(`${BASE_URL}${path}`, {
            method,
            headers: {
                Accept: 'application/json',
                ...(token && { Authorization: `Bearer ${token}` }),
                ...(body !== undefined &&
                    !(body instanceof FormData) && { 'Content-Type': 'application/json' }),
                ...headers
            },
            body: serializeBody(body),
            signal: AbortSignal.timeout(timeoutMs)
        });
    } catch (error) {
        if (error instanceof DOMException && error.name === 'TimeoutError') {
            throw new ApiError('The server took too long to respond. Please try again.', 504);
        }
        throw new ApiError('Unable to reach the server. Please try again.', 503);
    }

    const data = await response.json().catch(() => null);

    if (!response.ok) {
        throw parseErrorBody(response.status, data);
    }

    return data as T;
}