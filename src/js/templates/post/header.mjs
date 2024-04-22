import { DEFAULT_AVATAR_URL } from "../../constants/index.mjs";

export function updatePostHeader(postClone, { author, created }) {
  const postAvatar = postClone.querySelector(".post-avatar");
  const postProfileLink = postClone.querySelector(".post-author");
  const postDate = postClone.querySelector(".post-date");

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
  const formattedDate = new Date(created).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  postDate.textContent = formattedDate;
  postDate.setAttribute("datetime", created);
}
