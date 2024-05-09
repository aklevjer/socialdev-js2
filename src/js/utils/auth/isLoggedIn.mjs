import * as storage from "../storage/index.mjs";

/**
 * Checks if the user is logged in by verifying that "accessToken" exists in local storage.
 *
 * @returns {boolean} Indicates whether or not the user is logged in.
 */
export function isLoggedIn() {
  return storage.get("accessToken") !== null;
}
