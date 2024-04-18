import { isLoggedIn } from "../utils/auth/index.mjs";
import {
  setLoginListener,
  setRegisterListener,
} from "../handlers/auth/index.mjs";

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
