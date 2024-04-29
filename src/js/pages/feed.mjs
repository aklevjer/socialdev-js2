import { getPosts } from "../api/posts/index.mjs";
import { feedHandler, setSearchListener } from "../handlers/feed/index.mjs";
import { setCreatePostListener } from "../handlers/posts/index.mjs";

export function feedPage() {
  feedHandler.setCallback(getPosts);
  setCreatePostListener();
  setSearchListener();
}
