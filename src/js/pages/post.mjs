import { getPostById } from "../api/posts/index.mjs";
import { renderSinglePost } from "../handlers/posts/index.mjs";
import { showAlert } from "../handlers/ui/index.mjs";
import { setPageTitle } from "../utils/misc/index.mjs";
import { clearElement } from "../utils/html/index.mjs";

/**
 * Handles the logic for the post specific page.
 *
 * Redirects to the feed page if no id is provided or if the id is not a number.
 * Displays the post with the provided id.
 * Sets the page title with the post title.
 *
 * @param {Object} params - An object containing parameters extracted from the URL, including the post id.
 * @param {number} params.id - The id of the post.
 */
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
