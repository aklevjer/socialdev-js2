import { getPostById } from "../api/posts/index.mjs";
import { renderSinglePost } from "../handlers/posts/index.mjs";
import { showAlert } from "../handlers/ui/index.mjs";
import { setPageTitle } from "../utils/misc/index.mjs";
import { clearElement } from "../utils/html/index.mjs";

export async function postPage({ id }) {
  if (!id || Number.isNaN(Number(id))) {
    location.href = "/feed/";
    return;
  }

  const singleContainer = document.querySelector("#single-post");

  try {
    const singlePost = await getPostById(id);

    clearElement(singleContainer);
    renderSinglePost(singlePost.data, singleContainer, true);
    setPageTitle(singlePost.data.title);
  } catch (error) {
    showAlert("error", error.message, singleContainer);
  }
}
