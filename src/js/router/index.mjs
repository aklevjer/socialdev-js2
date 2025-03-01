import * as pages from "../pages/index.mjs";
import { checkAuth } from "../utils/auth/index.mjs";

/**
 * Handles routing logic based on the current URL path.
 */
export default function router() {
  const url = new URL(location.href);
  const path = url.pathname;
  const params = Object.fromEntries(url.searchParams.entries());

  switch (path) {
    case "/":
    case "/index.html":
    case "/register":
    case "/register/":
    case "/register/index.html":
      pages.authPage(path);
      break;

    case "/feed":
    case "/feed/":
    case "/feed/index.html":
      checkAuth(() => pages.feedPage());
      break;

    case "/profile":
    case "/profile/":
    case "/profile/index.html":
      checkAuth(() => pages.profilePage(params));
      break;

    case "/post":
    case "/post/":
    case "/post/index.html":
      checkAuth(() => pages.postPage(params));
      break;
  }
}
