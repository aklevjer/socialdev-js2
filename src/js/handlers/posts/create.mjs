import { createPost } from "../../api/posts/create.mjs";
import { openModal, closeModal } from "../ui/modal/index.mjs";
import { showAlert } from "../ui/index.mjs";

async function handleCreatePost(event) {
  event.preventDefault();

  const createPostForm = event.target;
  const formData = new FormData(createPostForm);

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

  const newPost = {
    title,
    body,
    tags,
    media,
  };

  try {
    await createPost(newPost);
    closeModal();
  } catch (error) {
    const formMsg = document.querySelector("#form-message");
    showAlert("error", error.message, formMsg);
  }
}

export function setCreatePostListener() {
  const createPostBtn = document.querySelector("#create-post-btn");

  if (createPostBtn) {
    createPostBtn.addEventListener("click", () => openModal(handleCreatePost));
  }
}
