import { isLoggedIn } from "./index.mjs";
import { setLogoutListener } from "../../handlers/auth/index.mjs";
import { setNavListener } from "../../handlers/ui/index.mjs";

export function checkAuth(callback) {
  if (isLoggedIn()) {
    setLogoutListener();
    setNavListener();
    callback();
  } else {
    location.href = "/";
  }
}
