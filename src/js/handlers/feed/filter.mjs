import { getPosts, getPostsByTag } from "../../api/index.mjs";
import { feedHandler } from "./index.mjs";

function handleFilter(event) {
  const selectedTag = event.target.value;
  const showAll = selectedTag === "All";

  feedHandler.reset();

  if (showAll) {
    feedHandler.setCallback(getPosts);
  } else {
    feedHandler.setCallback(getPostsByTag, selectedTag);
  }
}

export function setFilterListener() {
  const filterSelect = document.querySelector("#filter");

  if (filterSelect) {
    filterSelect.addEventListener("change", handleFilter);
  }
}
