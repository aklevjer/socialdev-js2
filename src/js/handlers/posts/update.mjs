import { updatePost, getPostById } from "../../api/posts/index.mjs";
import { formatTags, formatMedia } from "../../utils/format/index.mjs";
import { createPostTemplate } from "../../templates/post/index.mjs";
import { closeModal } from "../ui/modal/index.mjs";
import { showAlert } from "../ui/index.mjs";

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

    const fullPost = await getPostById(postId);
    const oldPostContainer = document.querySelector(`#post-${postId}`);

    if (oldPostContainer) {
      const newPostContainer = createPostTemplate(fullPost.data);
      oldPostContainer.replaceWith(newPostContainer);
    }

    closeModal();
  } catch (error) {
    const formMsg = document.querySelector("#form-message");
    showAlert("error", error.message, formMsg);
  }
}
