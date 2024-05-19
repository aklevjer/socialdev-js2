import { getPosts, searchPosts } from "../../api/index.mjs";
import { debounce } from "../../utils/misc/index.mjs";

/**
 * Searches for posts when the value of the search input changes.
 *
 * @param {Event} event - The event object representing the search input.
 * @param {FeedPostsHandler} feedPostsHandler - The handler for feed posts.
 */
function handleSearchPosts(event, feedPostsHandler) {
  const searchQuery = event.target.value.trim();

  if (searchQuery) {
    feedPostsHandler.setCallback(searchPosts, searchQuery);
  } else {
    feedPostsHandler.setCallback(getPosts);
  }
}

/**
 * Sets an event listener for the search input and triggers the search process.
 * Input events are debounced to improve performance and reduce unnecessary API requests.
 *
 * @param {FeedPostsHandler} feedPostsHandler - The handler for feed posts.
 */
export function setSearchListener(feedPostsHandler) {
  const searchInput = document.querySelector("#search");

  if (searchInput) {
    const processInput = debounce((event) =>
      handleSearchPosts(event, feedPostsHandler),
    );
    searchInput.addEventListener("input", (event) => processInput(event));
  }
}
