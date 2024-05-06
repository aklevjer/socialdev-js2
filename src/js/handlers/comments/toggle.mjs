import { createCommentsTemplate } from "../../templates/comments/index.mjs";

export function handleToggleComments(postData) {
  const postContainer = document.querySelector(`#post-${postData.id}`);
  const currentComments = postContainer.querySelector(".comment-section");
  const prevComments = document.querySelector(".comment-section");

  if (prevComments && prevComments !== currentComments) {
    prevComments.remove();
  }

  if (currentComments) {
    currentComments.remove();
  } else {
    const commentsClone = createCommentsTemplate(postData);
    postContainer.appendChild(commentsClone);
  }
}
