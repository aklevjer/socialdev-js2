import { getPosts } from "../api/posts/index.mjs";
import { setCreatePostListener } from "../handlers/posts/index.mjs";
import {
  feedHandler,
  setSearchListener,
  setFilterListener,
} from "../handlers/feed/index.mjs";

export function feedPage() {
  feedHandler.setCallback(getPosts);
  setCreatePostListener();
  setSearchListener();
  setFilterListener();
}
