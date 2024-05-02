import { createPost, getPostById } from "../../api/posts/index.mjs";
import { formatTags, formatMedia } from "../../utils/format/index.mjs";
import { renderSinglePost } from "./index.mjs";
import { openModal, closeModal } from "../ui/modal/index.mjs";
import { showAlert } from "../ui/index.mjs";

async function handleCreatePost(event) {
  event.preventDefault();

  const createPostForm = event.target;
  const formData = new FormData(createPostForm);

  const title = formData.get("title");
  const body = formData.get("body");
  const tagsString = formData.get("tags");
  const mediaUrl = formData.get("mediaurl");

  const tags = formatTags(tagsString);
  const media = formatMedia(title, mediaUrl);

  const newPost = {
    title,
    body,
    tags,
    media,
  };

  try {
    const createdPost = await createPost(newPost);
    const fullPost = await getPostById(createdPost.data.id);
    const feedContainer = document.querySelector("#feed-posts");

    renderSinglePost(fullPost.data, feedContainer);
    closeModal();
  } catch (error) {
    const formMsg = document.querySelector("#form-message");
    showAlert("error", error.message, formMsg);
  }
}

export function setCreatePostListener() {
  const createPostBtn = document.querySelector("#create-post-btn");

  if (createPostBtn) {
    createPostBtn.addEventListener("click", () =>
      openModal("createPost", handleCreatePost),
    );
  }
}
