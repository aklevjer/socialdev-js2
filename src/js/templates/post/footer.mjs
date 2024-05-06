import { handleReactToPost } from "../../handlers/posts/index.mjs";
import { hasUserReacted } from "../../utils/misc/index.mjs";
import { handleToggleComments } from "../../handlers/comments/index.mjs";

export function updatePostFooter(postClone, postData) {
  const postLikeBtn = postClone.querySelector(".post-like-btn");
  const postLikeBtnIcon = postClone.querySelector(".post-like-btn-icon");
  const postLikeBtnText = postClone.querySelector(".post-like-btn-text");
  const postCommentBtn = postClone.querySelector(".post-comment-btn");
  const postCommentBtnText = postClone.querySelector(".post-comment-btn-text");

  const { id, _count, reactions } = postData;
  const hasLiked = hasUserReacted(reactions, "❤️");

  // Like button icon
  postLikeBtnIcon.classList.add("bi");
  postLikeBtnIcon.classList.toggle("bi-heart-fill", hasLiked);
  postLikeBtnIcon.classList.toggle("text-red-400", hasLiked);
  postLikeBtnIcon.classList.toggle("bi-heart", !hasLiked);

  // Like button text
  postLikeBtnText.textContent = `${_count.reactions} Likes`;

  // Like button listener
  postLikeBtn.addEventListener("click", (event) =>
    handleReactToPost(event, id),
  );

  // Comment button text
  postCommentBtnText.textContent = `${_count.comments} Comments`;

  // Comment button listener
  postCommentBtn.addEventListener("click", () =>
    handleToggleComments(postData),
  );
}
