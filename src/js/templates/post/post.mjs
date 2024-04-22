import * as postComps from "./index.mjs";
import { getTemplateClone } from "../../utils/html/index.mjs";

export function createPost(postData) {
  const postClone = getTemplateClone("post");

  postComps.updatePostHeader(postClone, postData);
  postComps.updatePostContent(postClone, postData);
  postComps.updatePostTags(postClone, postData);
  postComps.updatePostImage(postClone, postData);
  postComps.updatePostFooter(postClone, postData);

  return postClone;
}
