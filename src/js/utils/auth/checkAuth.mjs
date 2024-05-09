import { isLoggedIn } from "./index.mjs";
import { setLogoutListener } from "../../handlers/auth/index.mjs";
import { setNavListener } from "../../handlers/ui/index.mjs";

/**
 * Checks if the user is authenticated. If authenticated, it calls the specified callback function.
 * If the user is not logged in it redirects to the home page.
 *
 * @param {function} callback - The callback to be called if the user is logged in.
 */
export function checkAuth(callback) {
  if (isLoggedIn()) {
    setLogoutListener();
    setNavListener();
    callback();
  } else {
    location.href = "/";
  }
}
