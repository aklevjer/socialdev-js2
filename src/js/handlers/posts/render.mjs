import { getPostById } from "../../api/posts/index.mjs";
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

export async function reRenderPost(postId, isFullPost = false) {
  try {
    const post = await getPostById(postId);
    const oldPostContainer = document.querySelector(`#post-${postId}`);

    if (oldPostContainer) {
      const newPostContainer = createPostTemplate(post.data, isFullPost);
      oldPostContainer.replaceWith(newPostContainer);
    }
  } catch (error) {
    throw error;
  }
}
