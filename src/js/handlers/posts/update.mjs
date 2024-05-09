import { updatePost } from "../../api/posts/index.mjs";
import { reRenderPost } from "./index.mjs";
import { formatTags, formatMedia } from "../../utils/format/index.mjs";
import { closeModal } from "../ui/modal/index.mjs";
import { showAlert } from "../ui/index.mjs";

/**
 * Updates a post when the edit post form is submitted.
 *
 * @param {Event} event - The event object representing the edit post form submission.
 * @param {number} postId - The id of the post.
 */
export async function handleUpdatePost(event, postId) {
  event.preventDefault();

  const editPostForm = event.target;
  const formData = new FormData(editPostForm);

  const title = formData.get("title");
  const body = formData.get("body");
  const tagsString = formData.get("tags");
  const mediaUrl = formData.get("mediaurl");

  const tags = formatTags(tagsString);
  const media = formatMedia(title, mediaUrl);

  const updatedPost = {
    title,
    body,
    tags,
    media,
  };

  try {
    await updatePost(postId, updatedPost);
    await reRenderPost(postId, false);

    closeModal();
  } catch (error) {
    const formMsg = document.querySelector("#form-message");
    showAlert("error", error.message, formMsg);
  }
}
