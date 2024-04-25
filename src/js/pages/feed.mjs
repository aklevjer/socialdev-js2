import { getPosts } from "../api/posts/index.mjs";
import { showAlert } from "../handlers/ui/index.mjs";
import {
  renderPosts,
  setCreatePostListener,
} from "../handlers/posts/index.mjs";

export async function feedPage() {
  const feedContainer = document.querySelector("#feed-posts");

  try {
    const allPosts = await getPosts();
    renderPosts(allPosts.data, feedContainer);
  } catch (error) {
    showAlert("error", error.message, feedContainer);
  }

  setCreatePostListener();
}
