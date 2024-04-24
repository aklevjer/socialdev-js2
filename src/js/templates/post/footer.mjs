export function updatePostFooter(postClone, postData) {
  const postLikes = postClone.querySelector(".post-likes");
  const postComments = postClone.querySelector(".post-comments");

  const { _count } = postData;

  // Likes
  postLikes.textContent = `${_count.reactions} Likes`;

  // Comments
  postComments.textContent = `${_count.comments} Comments`;
}
