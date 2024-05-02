import * as storage from "../utils/storage/index.mjs";
import { getProfileByName, getPostsByProfile } from "../api/profiles/index.mjs";
import { renderProfile } from "../handlers/profiles/index.mjs";
import { PostsHandler } from "../handlers/posts/index.mjs";
import { showAlert } from "../handlers/ui/index.mjs";
import { setPageTitle } from "../utils/misc/index.mjs";
import { clearElement } from "../utils/html/index.mjs";

export async function profilePage({ user }) {
  const { name } = storage.get("profile");
  const profileName = user || name;

  const profileContainer = document.querySelector("#profile-card");
  const postsContainer = document.querySelector("#profile-posts");

  try {
    const profile = await getProfileByName(profileName);

    clearElement(profileContainer);
    renderProfile(profile.data, profileContainer);
    setPageTitle(profileName);

    if (!profile.data.posts.length) {
      showAlert("info", "This profile has no posts yet", postsContainer);
      return;
    }

    const profilePostsHandler = new PostsHandler(postsContainer);
    profilePostsHandler.setCallback(getPostsByProfile, profileName);
  } catch (error) {
    showAlert("error", error.message, profileContainer);
  }
}
