import { removePost } from "../../api/posts/index.mjs";

export async function handleRemovePost(postId) {
  try {
    await removePost(postId);

    const oldPostContainer = document.querySelector(`#post-${postId}`);

    if (oldPostContainer) {
      oldPostContainer.remove();
    }
  } catch (error) {
    console.error(error);
  }
}
