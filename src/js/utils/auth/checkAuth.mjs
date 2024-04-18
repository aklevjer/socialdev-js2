import { isLoggedIn } from "./index.mjs";
import { setUIListeners } from "../../handlers/ui/common.mjs";

export function checkAuth(callback) {
  if (isLoggedIn()) {
    setUIListeners();
    callback();
  } else {
    location.href = "/";
  }
}
