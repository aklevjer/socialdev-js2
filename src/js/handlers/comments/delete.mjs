import { removeComment } from "../../api/comments/index.mjs";
import { reRenderPost } from "../posts/index.mjs";
import { showAlert } from "../ui/index.mjs";

/**
 * Deletes a comment from a post.
 *
 * @param {number} postId - The id of the post.
 * @param {number} commentId - The id of comment.
 */
export async function handleRemoveComment(postId, commentId) {
  try {
    await removeComment(postId, commentId);
    await reRenderPost(postId, true);
  } catch (error) {
    showAlert("error", error.message);
  }
}
