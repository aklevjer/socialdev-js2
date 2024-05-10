/**
 * Updates the content within a post template.
 *
 * @param {DocumentFragment} postClone - The cloned post template containing the content.
 * @param {Object} postData - The data of the post.
 */
export function updatePostContent(postClone, postData) {
  const postLink = postClone.querySelector(".post-link");
  const postTitle = postClone.querySelector(".post-title");
  const postBody = postClone.querySelector(".post-body");

  const { id, title, body } = postData;

  // Link
  postLink.href = `/post/?id=${id}`;

  // Title
  postTitle.textContent = title;

  // Body text
  if (body) {
    postBody.textContent = body;
  } else {
    postBody.remove();
  }
}
