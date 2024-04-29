import { feedHandler } from "./index.mjs";

export const feedObserver = (function () {
  let observer = null;
  let lastPostContainer = null;

  function observeLastPost(lastPost, isLastPage) {
    lastPostContainer = lastPost;

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(lastPostContainer);
          observer.disconnect();
          feedHandler.loadNextPage();
        }
      });
    });

    if (!isLastPage) {
      observer.observe(lastPostContainer);
    }
  }

  function disconnect() {
    if (observer) {
      if (lastPostContainer) {
        observer.unobserve(lastPostContainer);
      }
      observer.disconnect();
    }
  }

  return {
    observeLastPost,
    disconnect,
  };
})();
