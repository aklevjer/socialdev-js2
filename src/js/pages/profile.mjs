import * as storage from "../utils/storage/index.mjs";
import { getProfileByName, getPostsByProfile } from "../api/profiles/index.mjs";
import { setPageTitle } from "../utils/misc/index.mjs";
import { renderProfile } from "../handlers/profiles/index.mjs";
import { renderPosts } from "../handlers/posts/index.mjs";
import { showAlert } from "../handlers/ui/index.mjs";

export async function profilePage({ user }) {
  const { name } = storage.get("profile");
  const profileName = user || name;

  const profileContainer = document.querySelector("#profile-card");
  const postsContainer = document.querySelector("#profile-posts");

  try {
    const profile = await getProfileByName(profileName);
    setPageTitle(profile.data.name);
    renderProfile(profile.data, profileContainer);
  } catch (error) {
    showAlert("error", error.message, profileContainer);
    return;
  }

  try {
    const profilePosts = await getPostsByProfile(profileName);
    renderPosts(profilePosts.data, postsContainer);
  } catch (error) {
    showAlert("error", error.message, postsContainer);
  }
}
