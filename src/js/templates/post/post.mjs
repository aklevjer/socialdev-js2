import * as postComps from "./index.mjs";
import { createCommentsTemplate } from "../comments/index.mjs";
import { getTemplateClone } from "../../utils/html/index.mjs";

export function createPostTemplate(postData, isFullPost) {
  const postClone = getTemplateClone("post");
  const postContainer = postClone.querySelector(".post");

  postComps.updatePostHeader(postClone, postData);
  postComps.updatePostContent(postClone, postData);
  postComps.updatePostTags(postClone, postData);
  postComps.updatePostImage(postClone, postData);
  postComps.updatePostFooter(postClone, postData);

  if (isFullPost) {
    const commentsClone = createCommentsTemplate(postData);
    postContainer.appendChild(commentsClone);
  }

  postContainer.id = `post-${postData.id}`;

  return postClone;
}
