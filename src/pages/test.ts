export const prerender = false;
import type { APIRoute } from 'astro';
import { loadEnv } from 'vite';

const { FOO } = loadEnv(process.env.NODE_ENV, process.cwd(), '');

export const GET: APIRoute = async () => {
	return new Response(`FOO is ${FOO}`, { status: 200 });
};
