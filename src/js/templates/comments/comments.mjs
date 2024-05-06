import * as commentComps from "./index.mjs";
import { getTemplateClone } from "../../utils/html/index.mjs";

export function createCommentsTemplate(postData) {
  const commentsClone = getTemplateClone("comments");

  commentComps.updateCommentList(commentsClone, postData);
  commentComps.updateCommentForm(commentsClone, postData);

  return commentsClone;
}
