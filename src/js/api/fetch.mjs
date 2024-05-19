import { headers } from "./index.mjs";

/**
 * Performs a fetch request with authentication headers.
 *
 * @param {string} url - The URL to fetch.
 * @param {Object} [options={}] - Additional options for the fetch request.
 * @param {Object} [options.body] - The body of the request.
 *
 * @returns {Promise<Response>} A Promise that resolves to the response to the fetch request.
 */
export async function authFetch(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(Boolean(options.body)),
  });
}
