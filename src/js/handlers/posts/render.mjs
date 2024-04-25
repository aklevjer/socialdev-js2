import { createPostTemplate } from "../../templates/post/index.mjs";

export function renderSinglePost(postData, parentElement) {
  const postClone = createPostTemplate(postData);
  parentElement.prepend(postClone);
}

export function renderPosts(postDatas, parentElement) {
  const postClones = postDatas.map(createPostTemplate);
  parentElement.append(...postClones);
}
