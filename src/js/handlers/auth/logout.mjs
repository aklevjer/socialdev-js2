import * as storage from "../../utils/storage/index.mjs";

/**
 * Logs out by removing user information from local storage and redirecting to the home page.
 */
function handleLogout() {
  storage.remove("accessToken");
  storage.remove("profile");
  location.href = "/";
}

/**
 * Sets an event listener for the log out button to trigger the log out process.
 */
export function setLogoutListener() {
  const logoutBtn = document.querySelector("#logout-btn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", handleLogout);
  }
}
