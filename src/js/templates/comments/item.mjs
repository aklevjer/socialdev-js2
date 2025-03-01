import * as storage from "../../utils/storage/index.mjs";
import { DEFAULT_AVATAR_URL } from "../../constants/index.mjs";
import { createDropdownTemplate } from "../ui/index.mjs";
import { formatDate } from "../../utils/format/index.mjs";

/**
 * Updates a single comment for a comments template.
 *
 * @param {HTMLElement} commentClone - The cloned single comment template.
 * @param {Object} commentData - The data of the comment.
 *
 * @returns {HTMLElement} The cloned single comment template populated with a comment.
 */
export function updateCommentItem(commentClone, commentData) {
  const commentHeader = commentClone.querySelector(".comment-header");
  const commentAvatar = commentClone.querySelector(".comment-avatar");
  const commentAuthor = commentClone.querySelector(".comment-author");
  const commentDate = commentClone.querySelector(".comment-date");
  const commentBody = commentClone.querySelector(".comment-body");

  const { author, created, body } = commentData;

  // Avatar
  commentAvatar.src = author.avatar.url || DEFAULT_AVATAR_URL;
  commentAvatar.alt = author.avatar.alt || `Avatar for ${author.name}`;
  commentAvatar.setAttribute(
    "onerror",
    `this.onerror=null;this.src="${DEFAULT_AVATAR_URL}";`,
  );

  // Author
  commentAuthor.textContent = author.name;
  commentAuthor.href = `/profile/?user=${author.name}`;

  // Date
  commentDate.textContent = formatDate(created);
  commentDate.setAttribute("datetime", created);

  // Body
  commentBody.textContent = body;

  // Dropdown
  // Add dropdown if the logged-in user is the author
  const { name } = storage.get("profile");
  if (author.name === name) {
    const dropdownClone = createDropdownTemplate("comment", commentData);
    commentHeader.append(dropdownClone);
  }

  return commentClone;
}
