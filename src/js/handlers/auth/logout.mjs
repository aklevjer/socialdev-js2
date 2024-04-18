import * as storage from "../../utils/storage/index.mjs";

function handleLogout() {
  storage.remove("accessToken");
  storage.remove("profile");
  location.href = "/";
}

export function setLogoutListener() {
  const logoutBtn = document.querySelector("#logout-btn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", handleLogout);
  }
}
