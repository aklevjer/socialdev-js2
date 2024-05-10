import * as postComps from "./index.mjs";
import { createCommentsTemplate } from "../comments/index.mjs";
import { getTemplateClone } from "../../utils/html/index.mjs";

/**
 * Creates and populates a post template.
 *
 * @param {Object} postData - The data of the post.
 * @param {boolean} isFullPost - Indicates if the post should be a full post.
 *
 * @returns {DocumentFragment} The cloned post template populated.
 */
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
