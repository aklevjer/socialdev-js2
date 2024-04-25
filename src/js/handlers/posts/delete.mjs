import { removePost } from "../../api/posts/index.mjs";

export async function handleRemovePost(postId) {
  try {
    await removePost(postId);

    const oldPost = document.querySelector(`#post-${postId}`);

    if (oldPost) {
      oldPost.remove();
    }
  } catch (error) {
    console.error(error);
  }
}
