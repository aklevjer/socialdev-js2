/**
 * Updates the tags within a post template.
 *
 * @param {DocumentFragment} postClone The cloned post template containing the tags.
 * @param {Object} postData - The data of the post.
 */
export function updatePostTags(postClone, postData) {
  const postTagList = postClone.querySelector(".post-tags");
  const postTag = postClone.querySelector(".post-tag");

  const { tags } = postData;

  if (!tags.length || tags.every((tag) => !tag.trim())) {
    postTagList.remove();
    return;
  }

  postTag.remove();

  for (const tag of tags) {
    if (!tag.trim()) {
      continue;
    }

    const postTagItem = postTag.cloneNode(true);
    const postTagText = postTagItem.querySelector(".post-tag-text");

    postTagText.textContent = `#${tag.replace("#", "")}`;
    postTagList.appendChild(postTagItem);
  }
}
