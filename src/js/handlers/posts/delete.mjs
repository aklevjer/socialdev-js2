import { removePost } from "../../api/posts/index.mjs";
import { showAlert } from "../ui/index.mjs";

export async function handleRemovePost(postId) {
  try {
    await removePost(postId);

    const oldPost = document.querySelector(`#post-${postId}`);

    if (oldPost) {
      const postsContainer = oldPost.parentElement;

      oldPost.remove();

      if (!postsContainer.childElementCount) {
        let message = "";

        if (postsContainer.id === "profile-posts") {
          message = "This profile has no posts yet";
        } else {
          message = "This post was deleted";
        }

        showAlert("info", message, postsContainer);
      }
    }
  } catch (error) {
    console.error(error);
  }
}
