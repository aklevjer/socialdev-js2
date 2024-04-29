import { getPosts, searchPosts } from "../../api/index.mjs";
import { feedHandler } from "./index.mjs";
import { debounce } from "../../utils/misc/index.mjs";

function handleSearch(event) {
  const searchQuery = event.target.value.trim();
  feedHandler.reset();

  if (searchQuery) {
    feedHandler.setCallback(searchPosts, searchQuery);
  } else {
    feedHandler.setCallback(getPosts);
  }
}

export function setSearchListener() {
  const searchInput = document.querySelector("#search");

  if (searchInput) {
    const processInput = debounce((event) => handleSearch(event));
    searchInput.addEventListener("input", (event) => processInput(event));
  }
}
