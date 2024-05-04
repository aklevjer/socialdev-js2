import { DEFAULT_AVATAR_URL } from "../../constants/index.mjs";
import { createDropdownTemplate } from "../ui/index.mjs";
import { formatDate } from "../../utils/format/index.mjs";

export function updatePostHeader(postClone, postData, loggedInUser) {
  const postHeader = postClone.querySelector(".post-header");
  const postAvatar = postClone.querySelector(".post-avatar");
  const postProfileLink = postClone.querySelector(".post-author");
  const postDate = postClone.querySelector(".post-date");

  const { author, created } = postData;

  // Avatar image
  postAvatar.src = author.avatar.url || DEFAULT_AVATAR_URL;
  postAvatar.alt = author.avatar.alt || `Avatar for ${author.name}`;
  postAvatar.setAttribute(
    "onerror",
    `this.onerror=null;this.src="${DEFAULT_AVATAR_URL}";`,
  );

  // Profile link
  postProfileLink.textContent = author.name;
  postProfileLink.href = `/profile/?user=${author.name}`;

  // Post date
  postDate.textContent = formatDate(created);
  postDate.setAttribute("datetime", created);

  // Dropdown
  // Add dropdown if the logged-in user is the author
  if (author.name === loggedInUser) {
    const dropdownClone = createDropdownTemplate(postData);
    postHeader.appendChild(dropdownClone);
  }
}
