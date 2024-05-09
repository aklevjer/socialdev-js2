import * as storage from "../utils/storage/index.mjs";
import { API_KEY } from "../constants/index.mjs";

/**
 * Constructs headers for a fetch request, including authentication headers if available.
 *
 * @param {boolean} [hasBody=false] - Indicates whether the request has a body.
 * @returns {Headers} The constructed headers for the fetch request.
 */
export function headers(hasBody = false) {
  const headers = new Headers();
  const accessToken = storage.get("accessToken");

  if (accessToken) {
    headers.append("Authorization", `Bearer ${accessToken}`);
  }

  if (API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  if (hasBody) {
    headers.append("Content-Type", "application/json");
  }

  return headers;
}
