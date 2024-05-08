import { DEFAULT_POST_URL } from "../../constants/index.mjs";

/**
 * Updates the image within a post template.
 *
 * @param {DocumentFragment} postClone The cloned post template containing the image.
 * @param {Object} postData - The data of the post.
 */
export function updatePostImage(postClone, postData) {
  const postImage = postClone.querySelector(".post-image");

  const { title, media } = postData;

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
