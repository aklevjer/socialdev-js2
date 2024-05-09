import { getPosts } from "../api/posts/index.mjs";
import {
  PostsHandler,
  setSearchListener,
  setFilterListener,
  setCreatePostListener,
} from "../handlers/posts/index.mjs";

/**
 * Handles the logic for the feed page.
 *
 * Sets up the feedPostsHandler to fetch and display posts using getPosts.
 * Sets up event listeners for search, filter and create post.
 */
export function feedPage() {
  const feedContainer = document.querySelector("#feed-posts");
  const feedPostsHandler = new PostsHandler(feedContainer);
  feedPostsHandler.setCallback(getPosts);

  setSearchListener(feedPostsHandler);
  setFilterListener(feedPostsHandler);
  setCreatePostListener();
}
