import * as commentComps from "./index.mjs";
import { getTemplateClone } from "../../utils/html/index.mjs";

/**
 * Creates and populates a comments template for a post.
 *
 * @param {Object} postData - The data of the post, including comments.
 * @returns {DocumentFragment} The cloned template populated with comments.
 */
export function createCommentsTemplate(postData) {
  const commentsClone = getTemplateClone("comments");

  commentComps.updateCommentList(commentsClone, postData);
  commentComps.updateCommentForm(commentsClone, postData);

  return commentsClone;
}
