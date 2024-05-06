import { updateCommentItem } from "./index.mjs";

export function updateCommentList(commentsClone, postData) {
  const commentsList = commentsClone.querySelector(".comments-list");
  const commentItem = commentsClone.querySelector(".comment");

  const { comments } = postData;

  if (!comments.length) {
    commentsList.remove();
  }

  commentItem.remove();

  const updatedComments = comments.map((comment) => {
    const commentClone = commentItem.cloneNode(true);
    const updatedComment = updateCommentItem(commentClone, comment);

    return updatedComment;
  });

  commentsList.append(...updatedComments);
}
