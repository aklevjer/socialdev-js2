import { PostObserver, renderPosts } from "./index.mjs";
import { showAlert } from "../ui/index.mjs";
import { clearElement } from "../../utils/html/index.mjs";

/**
 * Class representing a handler for loading and managing posts.
 *
 * @example
 * ```js
 * import { getPosts } from '../api/posts/index.mjs';
 *
 * const postsContainer = document.querySelector("#posts-container");
 * const postsHandler = new PostsHandler(postsContainer);
 * postsHandler.setCallback(getPosts);
 * ```
 */
export class PostsHandler {
  /**
   * Create a PostsHandler.
   *
   * @param {HTMLElement} postsContainer - The container element where posts will be rendered.
   */
  constructor(postsContainer) {
    this.limit = 50;
    this.currentPage = 1;
    this.fetchCallback = null;
    this.fetchParams = null;
    this.postObserver = new PostObserver(this);
    this.postsContainer = postsContainer;
  }

  /**
   * Loads posts using the provided fetch callback and params.
   */
  async loadPosts() {
    try {
      const posts = await this.fetchCallback(
        ...this.fetchParams,
        this.currentPage,
        this.limit,
      );

      if (!posts.data.length) {
        showAlert("info", "No posts found", this.postsContainer);
        return;
      }

      renderPosts(posts.data, this.postsContainer);
      this.postObserver.observeLastPost(
        this.postsContainer.lastElementChild,
        posts.meta.isLastPage,
      );
    } catch (error) {
      showAlert("error", error.message, this.postsContainer);
    }
  }

  /**
   * Loads the next page of posts.
   */
  loadNextPage() {
    this.currentPage++;
    this.loadPosts();
  }

  /**
   * Resets the state of the posts handler.
   */
  reset() {
    this.currentPage = 1;
    this.postObserver.disconnect();
    clearElement(this.postsContainer);
  }

  /**
   * Sets the fetch callback and parameters for loading posts.
   *
   * @param {function} callback - The callback function to fetch posts.
   * @param {...any} params - Additional parameters for the callback function.
   */
  setCallback(callback, ...params) {
    this.fetchCallback = callback;
    this.fetchParams = [...params];
    this.reset();
    this.loadPosts();
  }
}
