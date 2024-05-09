import { isLoggedIn } from "../utils/auth/index.mjs";
import {
  setLoginListener,
  setRegisterListener,
} from "../handlers/auth/index.mjs";

/**
 * Handles the logic for the authentication pages.
 *
 * Redirects to the profile page if the user is already logged in.
 * Sets up event listeners for the login and register forms.
 *
 * @param {string} path - The path of the current page.
 */
export function authPage(path) {
  if (isLoggedIn()) {
    location.href = "/profile/";
    return;
  }

  if (path === "/" || path === "/index.html") {
    setLoginListener();
  } else {
    setRegisterListener();
  }
}
