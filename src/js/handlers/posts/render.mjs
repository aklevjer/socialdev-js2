import { getPostById } from "../../api/posts/index.mjs";
import { createPostTemplate } from "../../templates/post/index.mjs";

/**
 * Renders a single post to the DOM.
 *
 * @param {Object} postData - The data of the post.
 * @param {HTMLElement} parentElement - The element to prepend the post to.
 * @param {boolean} [isFullPost=false] - Indicates if the post should be a full post.
 */
export function renderSinglePost(postData, parentElement, isFullPost = false) {
  const postClone = createPostTemplate(postData, isFullPost);
  parentElement.prepend(postClone);
}

/**
 * Renders an array of posts to the DOM.
 *
 * @param {object[]} postDatas - An array of data for the posts.
 * @param {HTMLElement} parentElement - The element to append the posts to.
 * @param {boolean} [isFullPost=false] - Indicates if the posts should be a full post.
 */
export function renderPosts(postDatas, parentElement, isFullPost = false) {
  const postClones = postDatas.map((postData) =>
    createPostTemplate(postData, isFullPost),
  );
  parentElement.append(...postClones);
}

/**
 * Re-renders a post with updated data.
 *
 * @param {number} postId - The id of the post.
 * @param {boolean} [isFullPost=false] - Indicates if the post should be a full post.
 */
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
