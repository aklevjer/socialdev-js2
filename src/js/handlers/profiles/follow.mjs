import { toggleFollowProfile } from "../../api/index.mjs";

export async function handleFollowProfile(event, profileName) {
  const profileBtn = event.currentTarget;
  const [profileBtnIcon, profileBtnText] = [...profileBtn.children];
  const profileFollowers = document.querySelector(".profile-followers");

  const shouldFollow = profileBtnText.textContent === "Follow";

  try {
    await toggleFollowProfile(profileName, shouldFollow);

    // Followers count
    let followersCount = parseInt(profileFollowers.textContent);
    shouldFollow ? followersCount++ : followersCount--;
    profileFollowers.textContent = followersCount;

    // Button icon
    profileBtnIcon.className = `bi ${shouldFollow ? "bi-person-dash-fill" : "bi-person-plus-fill"}`;

    // Button text
    profileBtnText.textContent = shouldFollow ? "Unfollow" : "Follow";
  } catch (error) {
    console.error(error);
  }
}
