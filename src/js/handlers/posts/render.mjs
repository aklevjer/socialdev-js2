import { createPostTemplate } from "../../templates/post/index.mjs";

export function renderSinglePost(postData, parentElement, isFullPost = false) {
  const postClone = createPostTemplate(postData, isFullPost);
  parentElement.prepend(postClone);
}

export function renderPosts(postDatas, parentElement, isFullPost = false) {
  const postClones = postDatas.map((postData) =>
    createPostTemplate(postData, isFullPost),
  );
  parentElement.append(...postClones);
}
