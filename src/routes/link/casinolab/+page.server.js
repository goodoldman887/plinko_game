// src/routes/link/gonzabet/+page.server.js
import { redirect } from '@sveltejs/kit';

// Отключаем статический prerender, чтобы сборка не пыталась
// рендерить эту страницу на этапе билда
export const prerender = false;

/** @type {import('./$types').PageServerLoad} */
export function load() {
  // Используем 307 Temporary Redirect
  throw redirect(
    307,
    'https://rollingslots45.com/en?stag=121005_6835c0372507a8664d171c4c' +
    '&clickid=3ju8o9b2ccj87' +
    '&tracking_link=http://rlsredirect.com/dcd98e345' +
    '&visit_id=smartlinkrolling#signup'
  );
}
