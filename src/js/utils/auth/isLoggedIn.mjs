import * as storage from "../storage/index.mjs";

export function isLoggedIn() {
  return storage.get("accessToken") !== null;
}
