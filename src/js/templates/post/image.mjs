import { DEFAULT_POST_URL } from "../../constants/index.mjs";

export function updatePostImage(postClone, { title, media }) {
  const postImage = postClone.querySelector(".post-image");

  if (!media) {
    postImage.remove();
    return;
  }

  postImage.src = media.url || DEFAULT_POST_URL;
  postImage.alt = media.alt || `Image from ${title}`;
  postImage.setAttribute(
    "onerror",
    `this.onerror=null;this.src="${DEFAULT_POST_URL}";`,
  );
}
