export function updatePostTags(postClone, { tags }) {
  const postTagList = postClone.querySelector(".post-tags");
  const postTag = postClone.querySelector(".post-tag");

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

    postTagText.textContent = `#${tag}`;
    postTagList.appendChild(postTagItem);
  }
}
