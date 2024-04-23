import { getPosts } from "../api/posts/index.mjs";
import { createPostTemplate } from "../templates/post/index.mjs";
import { setCreatePostListener } from "../handlers/posts/index.mjs";

export async function feedPage() {
  const feedList = document.querySelector("#feed-list");

  try {
    const allPosts = await getPosts();
    const createdPosts = allPosts.data.map(createPostTemplate);
    feedList.append(...createdPosts);
  } catch (error) {
    console.error(error);
  }

  setCreatePostListener();
}
