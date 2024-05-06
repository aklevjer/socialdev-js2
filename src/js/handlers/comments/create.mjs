import { createComment } from "../../api/comments/index.mjs";
import { reRenderPost } from "../posts/index.mjs";
import { showAlert } from "../ui/index.mjs";

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
