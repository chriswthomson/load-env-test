export const prerender = false;
import type { APIRoute } from 'astro';
import { loadEnv } from 'vite';

const { PUBLIC_FOO } = loadEnv(process.env.NODE_ENV, process.cwd(), '');

export const GET: APIRoute = async () => {
	return new Response(`FOO is ${PUBLIC_FOO}`, { status: 200 });
};
