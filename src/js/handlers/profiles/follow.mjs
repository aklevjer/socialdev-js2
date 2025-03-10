import { toggleFollowProfile } from "../../api/index.mjs";
import { showAlert } from "../ui/index.mjs";

/**
 * Handles toggling follow/unfollow a profile.
 *
 * @param {Event} event - The event object representing the follow/unfollow button click event.
 * @param {string} profileName - The profile name to follow/unfollow.
 */
export async function handleFollowProfile(event, profileName) {
  const profileBtn = event.currentTarget;
  const profileBtnIcon = profileBtn.firstElementChild;
  const profileBtnText = profileBtn.lastElementChild;
  const profileFollowers = document.querySelector(".profile-followers");

  const shouldFollow = profileBtnText.textContent === "Follow";

  try {
    await toggleFollowProfile(profileName, shouldFollow);

    // Followers count
    let followersCount = parseInt(profileFollowers.textContent);
    shouldFollow ? followersCount++ : followersCount--;
    profileFollowers.textContent = followersCount;

    // Button icon
    profileBtnIcon.classList.toggle("bi-person-dash-fill", shouldFollow);
    profileBtnIcon.classList.toggle("bi-person-plus-fill", !shouldFollow);

    // Button text
    profileBtnText.textContent = shouldFollow ? "Unfollow" : "Follow";
  } catch (error) {
    showAlert("error", error.message);
  }
}
