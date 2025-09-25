const DEFAULT_BACKEND_URL = typeof window === 'undefined'
	? process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'
	: (process.env.NEXT_PUBLIC_BACKEND_URL as string) || 'http://localhost:4000';

export const apiBaseUrl = `${DEFAULT_BACKEND_URL}/api`;

export async function apiFetch(input: string, init?: RequestInit) {
	const url = input.startsWith('http') ? input : `${apiBaseUrl}${input}`;
	const res = await fetch(url, init as any);
	if (!res.ok) {
		const text = await res.text().catch(() => '');
		throw new Error(`Request failed ${res.status}: ${text || res.statusText}`);
	}
	return res;
}


