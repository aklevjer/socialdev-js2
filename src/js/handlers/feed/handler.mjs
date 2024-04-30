import { feedObserver } from "./index.mjs";
import { renderPosts } from "../posts/index.mjs";
import { showAlert } from "../ui/index.mjs";
import { clearElement } from "../../utils/html/index.mjs";

export const feedHandler = (function () {
  let currentPage = 1;
  let fetchCallback = null;
  let fetchParams = null;

  const feedContainer = document.querySelector("#feed-posts");

  async function loadPosts() {
    try {
      const posts = await fetchCallback(...fetchParams, currentPage);

      if (!posts.data.length) {
        showAlert("info", "No posts found", feedContainer);
        return;
      }

      renderPosts(posts.data, feedContainer);

      feedObserver.observeLastPost(
        feedContainer.lastElementChild,
        posts.meta.isLastPage,
      );
    } catch (error) {
      showAlert("error", error.message, feedContainer);
    }
  }

  function setCallback(callback, ...params) {
    fetchCallback = callback;
    fetchParams = [...params];
    clearElement(feedContainer);
    loadPosts();
  }

  function loadNextPage() {
    currentPage++;
    loadPosts();
  }

  function reset() {
    currentPage = 1;
    feedObserver.disconnect();
  }

  return {
    setCallback,
    loadNextPage,
    reset,
  };
})();
