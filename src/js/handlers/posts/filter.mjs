import { getPosts, getPostsByTag } from "../../api/index.mjs";

/**
 * Filters posts when the value of the filter select is changed.
 *
 * @param {Event} event - The event object representing the filter select change.
 * @param {FeedPostsHandler} feedPostsHandler - The handler for feed posts.
 */
function handleFilterPosts(event, feedPostsHandler) {
  const selectedTag = event.target.value;
  const showAll = selectedTag === "All";

  if (showAll) {
    feedPostsHandler.setCallback(getPosts);
  } else {
    feedPostsHandler.setCallback(getPostsByTag, selectedTag);
  }
}

/**
 * Sets an event listener for the filter select and triggers the filtering process.
 *
 * @param {FeedPostsHandler} feedPostsHandler - The handler for feed posts.
 */
export function setFilterListener(feedPostsHandler) {
  const filterSelect = document.querySelector("#filter");

  if (filterSelect) {
    filterSelect.addEventListener("change", (event) =>
      handleFilterPosts(event, feedPostsHandler),
    );
  }
}
