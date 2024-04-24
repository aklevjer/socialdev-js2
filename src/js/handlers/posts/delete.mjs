import { removePost } from "../../api/posts/index.mjs";

export async function handleRemovePost(postId) {
  try {
    await removePost(postId);
  } catch (error) {
    console.error(error);
  }
}
