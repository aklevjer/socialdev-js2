export function updatePostFooter(postClone, { _count }) {
  const postLikes = postClone.querySelector(".post-likes");
  const postComments = postClone.querySelector(".post-comments");

  // Likes
  postLikes.textContent = `${_count.reactions} Likes`;

  // Comments
  postComments.textContent = `${_count.comments} Comments`;
}
