import * as storage from "../../utils/storage/index.mjs";
import { DEFAULT_AVATAR_URL } from "../../constants/index.mjs";
import { handleFollowProfile } from "../../handlers/profiles/index.mjs";

export function updateProfileHeader(profileClone, profileData) {
  const profileAvatar = profileClone.querySelector(".profile-avatar");
  const profileName = profileClone.querySelector(".profile-name");
  const profileBtn = profileClone.querySelector(".profile-btn");
  const profileBtnIcon = profileClone.querySelector(".profile-btn-icon");
  const profileBtnText = profileClone.querySelector(".profile-btn-text");

  const { name, avatar, followers } = profileData;
  const { name: loggedInUser } = storage.get("profile");

  const isOwner = name === loggedInUser;
  const isFollowing = followers.some(
    (follower) => follower.name === loggedInUser,
  );

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
  if (isOwner) {
    profileBtnIcon.className = "bi bi-person-fill-gear";
    profileBtnText.textContent = "Edit";
  } else {
    profileBtnIcon.className = `bi ${isFollowing ? "bi-person-dash-fill" : "bi-person-plus-fill"}`;
    profileBtnText.textContent = isFollowing ? "Unfollow" : "Follow";

    profileBtn.addEventListener("click", (event) =>
      handleFollowProfile(event, name),
    );
  }
}
