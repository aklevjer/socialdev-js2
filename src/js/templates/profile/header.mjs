import * as storage from "../../utils/storage/index.mjs";
import { DEFAULT_AVATAR_URL } from "../../constants/index.mjs";
import { openModal } from "../../handlers/ui/index.mjs";
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
  profileBtnIcon.classList.add("bi");

  if (isOwner) {
    profileBtnIcon.classList.add("bi-person-fill-gear");
    profileBtnText.textContent = "Edit";
  } else {
    profileBtnIcon.classList.toggle("bi-person-dash-fill", isFollowing);
    profileBtnIcon.classList.toggle("bi-person-plus-fill", !isFollowing);
    profileBtnText.textContent = isFollowing ? "Unfollow" : "Follow";
  }

  profileBtn.addEventListener("click", (event) => {
    if (isOwner) {
      openModal("editProfile", storage.get("profile"));
    } else {
      handleFollowProfile(event, name);
    }
  });
}
