import { updatePost } from "../../api/posts/index.mjs";
import { closeModal } from "../ui/modal/index.mjs";
import { showAlert } from "../ui/index.mjs";

export async function handleUpdatePost(event, postId) {
  event.preventDefault();

  const editPostForm = event.target;
  const formData = new FormData(editPostForm);

  const title = formData.get("title");
  const body = formData.get("body");
  const tagsString = formData.get("tags");
  const mediaUrl = formData.get("url");

  const tags = tagsString.replaceAll(",", " ").split(" ").filter(Boolean);

  const media = mediaUrl
    ? {
        url: mediaUrl,
        alt: `Image from ${title}`,
      }
    : null;

  const updatedPost = {
    title,
    body,
    tags,
    media,
  };

  try {
    await updatePost(postId, updatedPost);
    closeModal();
  } catch (error) {
    const formMsg = document.querySelector("#form-message");
    showAlert("error", error.message, formMsg);
  }
}
