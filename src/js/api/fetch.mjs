import { headers } from "./index.mjs";

export async function authFetch(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(Boolean(options.body)),
  });
}
