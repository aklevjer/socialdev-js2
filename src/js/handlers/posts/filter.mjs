import { getPosts, getPostsByTag } from "../../api/index.mjs";

function handleFilter(event, feedPostsHandler) {
  const selectedTag = event.target.value;
  const showAll = selectedTag === "All";

  if (showAll) {
    feedPostsHandler.setCallback(getPosts);
  } else {
    feedPostsHandler.setCallback(getPostsByTag, selectedTag);
  }
}

export function setFilterListener(feedPostsHandler) {
  const filterSelect = document.querySelector("#filter");

  if (filterSelect) {
    filterSelect.addEventListener("change", (event) =>
      handleFilter(event, feedPostsHandler),
    );
  }
}
