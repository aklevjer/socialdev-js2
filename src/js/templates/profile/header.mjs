import * as storage from "../../utils/storage/index.mjs";
import { DEFAULT_AVATAR_URL } from "../../constants/index.mjs";

export function updateProfileHeader(profileClone, profileData) {
  const profileAvatar = profileClone.querySelector(".profile-avatar");
  const profileName = profileClone.querySelector(".profile-name");
  const profileBtn = profileClone.querySelector(".profile-btn");
  const profileBtnIcon = profileClone.querySelector(".profile-btn-icon");
  const profileBtnText = profileClone.querySelector(".profile-btn-text");

  const { name, avatar } = profileData;

  // Profile avatar
  profileAvatar.src = avatar.url || DEFAULT_AVATAR_URL;
  profileAvatar.alt = avatar.alt || `Avatar for ${name}`;
  profileAvatar.setAttribute(
    "onerror",
    `this.onerror=null;this.src="${DEFAULT_AVATAR_URL}";`,
  );

  // Profile name
  profileName.textContent = name;

  // Profile button
  const { name: username } = storage.get("profile");
  const isOwner = name === username;
  profileBtnIcon.className = `bi ${isOwner ? "bi-person-fill-gear" : "bi-person-plus-fill"}`;
  profileBtnText.textContent = isOwner ? "Edit" : "Follow";
}
