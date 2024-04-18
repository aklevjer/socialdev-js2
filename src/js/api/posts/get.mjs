import { authFetch } from "../index.mjs";
import { API_POSTS_URL, API_PARAMS_POSTS } from "../../constants/index.mjs";

export async function getPosts() {
  const response = await authFetch(API_POSTS_URL + API_PARAMS_POSTS);

  if (response.ok) {
    return await response.json();
  }

  throw new Error("Failed to get a list of posts");
}

export async function getPostById(postId) {
  const response = await authFetch(
    `${API_POSTS_URL}/${postId}${API_PARAMS_POSTS}`,
  );

  if (response.ok) {
    return await response.json();
  }

  throw new Error(`Failed to get the post with the id: ${postId}`);
}
