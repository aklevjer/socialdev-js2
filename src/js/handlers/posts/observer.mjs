/**
 * Class representing an observer for detecting when the last post is in view.
 */
export class PostObserver {
  /**
   * Create a PostObserver.
   *
   * @param {PostsHandler} postsHandler - The posts handler instance.
   */
  constructor(postsHandler) {
    this.observer = null;
    this.lastPost = null;
    this.postsHandler = postsHandler;
  }

  /**
   * Observes the last post element and triggers loading the next page of posts when it's in view.
   *
   * @param {HTMLElement} lastPost - The last post element.
   * @param {boolean} isLastPage - Indicates if the current page is the last page of posts.
   */
  observeLastPost(lastPost, isLastPage) {
    this.lastPost = lastPost;

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.disconnect();
          this.postsHandler.loadNextPage();
        }
      });
    });

    if (!isLastPage) {
      this.observer.observe(this.lastPost);
    }
  }

  /**
   * Disconnects the observer.
   */
  disconnect() {
    if (this.observer) {
      if (this.lastPost) {
        this.observer.unobserve(this.lastPost);
      }
      this.observer.disconnect();
    }
  }
}
