import { getPostById } from "../api/posts/index.mjs";
import { showAlert } from "../handlers/ui/index.mjs";
import { renderSinglePost } from "../handlers/posts/index.mjs";

export async function postPage({ id }) {
  if (!id || isNaN(id)) {
    location.href = "/feed/";
    return;
  }

  const singleContainer = document.querySelector("#single-post");

  try {
    const singlePost = await getPostById(id);
    renderSinglePost(singlePost.data, singleContainer);
  } catch (error) {
    showAlert("error", error.message, singleContainer);
  }
}
