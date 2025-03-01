import { createComment } from "../../api/comments/index.mjs";
import { reRenderPost } from "../posts/index.mjs";
import { showAlert } from "../ui/index.mjs";

/**
 * Creates a comment on a post when the comment form is submitted.
 *
 * @param {Event} event - The event object representing the comment form submission.
 * @param {number} postId - The id of the post.
 */
export async function handleCreateComment(event, postId) {
  event.preventDefault();

  const createCommentForm = event.target;
  const formData = new FormData(createCommentForm);

  const newComment = {
    body: formData.get("comment"),
  };

  try {
    await createComment(postId, newComment);
    await reRenderPost(postId, true);
  } catch (error) {
    showAlert("error", error.message);
  }
}
