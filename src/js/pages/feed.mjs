import { getPosts } from "../api/posts/index.mjs";
import { createPost } from "../templates/post/index.mjs";

export async function feedPage() {
  const feedList = document.querySelector("#feed-list");

  try {
    const allPosts = await getPosts();
    const createdPosts = allPosts.data.map((post) => createPost(post));
    feedList.append(...createdPosts);
  } catch (error) {
    console.error(error);
  }
}
