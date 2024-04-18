import { isLoggedIn } from "./index.mjs";

export function checkAuth(callback) {
  if (isLoggedIn()) {
    callback();
  } else {
    location.href = "/";
  }
}
