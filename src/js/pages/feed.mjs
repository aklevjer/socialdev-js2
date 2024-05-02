import { getPosts } from "../api/posts/index.mjs";
import {
  PostsHandler,
  setSearchListener,
  setFilterListener,
  setCreatePostListener,
} from "../handlers/posts/index.mjs";

export function feedPage() {
  const feedContainer = document.querySelector("#feed-posts");
  const feedPostsHandler = new PostsHandler(feedContainer);
  feedPostsHandler.setCallback(getPosts);

  setSearchListener(feedPostsHandler);
  setFilterListener(feedPostsHandler);
  setCreatePostListener();
}
