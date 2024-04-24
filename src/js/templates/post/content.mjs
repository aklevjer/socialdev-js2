export function updatePostContent(postClone, postData) {
  const postTitle = postClone.querySelector(".post-title");
  const postBody = postClone.querySelector(".post-body");

  const { id, title, body } = postData;

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
