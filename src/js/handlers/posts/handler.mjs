import { PostObserver, renderPosts } from "./index.mjs";
import { showAlert } from "../ui/index.mjs";
import { clearElement } from "../../utils/html/index.mjs";

export class PostsHandler {
  constructor(postsContainer) {
    this.currentPage = 1;
    this.fetchCallback = null;
    this.fetchParams = null;
    this.postObserver = new PostObserver(this);
    this.postsContainer = postsContainer;
  }

  async loadPosts() {
    try {
      const posts = await this.fetchCallback(
        ...this.fetchParams,
        this.currentPage,
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

  loadNextPage() {
    this.currentPage++;
    this.loadPosts();
  }

  reset() {
    this.currentPage = 1;
    this.postObserver.disconnect();
    clearElement(this.postsContainer);
  }

  setCallback(callback, ...params) {
    this.fetchCallback = callback;
    this.fetchParams = [...params];
    this.reset();
    this.loadPosts();
  }
}
