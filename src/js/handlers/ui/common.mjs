import { setLogoutListener } from "../auth/index.mjs";
import { setNavListener } from "./index.mjs";

export function setUIListeners() {
  setLogoutListener();
  setNavListener();
}
