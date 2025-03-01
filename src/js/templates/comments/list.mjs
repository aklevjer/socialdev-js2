import { updateCommentItem } from "./index.mjs";
import { sortCommentsByDate } from "../../utils/misc/index.mjs";

/**
 * Updates the comments list within a comments template.
 *
 * @param {DocumentFragment} commentsClone - The cloned comments template containing the comments list.
 * @param {Object} postData - The data of the post, including comments.
 */
export function updateCommentList(commentsClone, postData) {
  const commentsList = commentsClone.querySelector(".comments-list");
  const commentItem = commentsClone.querySelector(".comment");

  const { comments } = postData;

  if (!comments.length) {
    commentsList.remove();
  }

  commentItem.remove();

  const sortedComments = sortCommentsByDate(comments);

  const updatedComments = sortedComments.map((comment) => {
    const commentClone = commentItem.cloneNode(true);
    const updatedComment = updateCommentItem(commentClone, comment);

    return updatedComment;
  });

  commentsList.append(...updatedComments);
}
