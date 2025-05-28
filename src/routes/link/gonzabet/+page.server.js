// src/routes/link/casinolab/+page.server.js
import { redirect } from '@sveltejs/kit';

// Disable prerendering to ensure server-side redirect
export const prerender = false;

/** @type {import('./$types').PageServerLoad} */
export function load() {
  // Permanent or temporary redirect (307 preserves method)
  throw redirect(
    307,
    'https://rollingslots45.com/en#signup_continue'
  );
}
