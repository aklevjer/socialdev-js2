export class PostObserver {
  constructor(postsHandler) {
    this.observer = null;
    this.lastPost = null;
    this.postsHandler = postsHandler;
  }

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

  disconnect() {
    if (this.observer) {
      if (this.lastPost) {
        this.observer.unobserve(this.lastPost);
      }
      this.observer.disconnect();
    }
  }
}
