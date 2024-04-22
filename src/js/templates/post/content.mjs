export function updatePostContent(postClone, { id, title, body }) {
  const postTitle = postClone.querySelector(".post-title");
  const postBody = postClone.querySelector(".post-body");

  // Title
  postTitle.textContent = title;
  postTitle.href = `/post/?id=${id}`;

  // Body text
  if (body) {
    postBody.textContent = body;
  } else {
    postBody.remove();
  }
}
