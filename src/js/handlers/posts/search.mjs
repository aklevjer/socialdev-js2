import { getPosts, searchPosts } from "../../api/index.mjs";
import { debounce } from "../../utils/misc/index.mjs";

function handleSearch(event, feedPostsHandler) {
  const searchQuery = event.target.value.trim();

  if (searchQuery) {
    feedPostsHandler.setCallback(searchPosts, searchQuery);
  } else {
    feedPostsHandler.setCallback(getPosts);
  }
}

export function setSearchListener(feedPostsHandler) {
  const searchInput = document.querySelector("#search");

  if (searchInput) {
    const processInput = debounce((event) =>
      handleSearch(event, feedPostsHandler),
    );
    searchInput.addEventListener("input", (event) => processInput(event));
  }
}
