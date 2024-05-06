import * as storage from "../../utils/index.mjs";
import { DEFAULT_AVATAR_URL } from "../../constants/index.mjs";

export function updateCommentForm(commentsClone, postData) {
  const commentForm = commentsClone.querySelector(".comment-form");
  const commentUserAvatar = commentsClone.querySelector(".comment-user-avatar");

  // User avatar
  const { name, avatar } = storage.get("profile");
  commentUserAvatar.src = avatar.url || DEFAULT_AVATAR_URL;
  commentUserAvatar.alt = avatar.alt || `Avatar for ${name}`;
  commentUserAvatar.setAttribute(
    "onerror",
    `this.onerror=null;this.src="${DEFAULT_AVATAR_URL}";`,
  );

  // Comment form
  // commentForm.addEventListener("submit", (event) =>
  //   handleCreateComment(event, postData.id),
  // );
}
