import { removeComment } from "../../api/comments/index.mjs";
import { reRenderPost } from "../posts/index.mjs";

export async function handleRemoveComment(postId, commentId) {
  try {
    await removeComment(postId, commentId);
    await reRenderPost(postId, true);
  } catch (error) {
    console.error(error);
  }
}
