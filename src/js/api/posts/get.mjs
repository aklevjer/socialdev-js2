import { authFetch } from "../index.mjs";
import { API_POSTS_URL, API_PARAMS_POSTS } from "../../constants/index.mjs";

export async function getPosts(page = 1, limit = 50) {
  const response = await authFetch(
    `${API_POSTS_URL}${API_PARAMS_POSTS}&page=${page}&limit=${limit}`,
  );

  const responseData = await response.json();

  if (response.ok) {
    return responseData;
  }

  const errorMessage =
    responseData?.errors[0]?.message || "Failed to get a list of posts";
  throw new Error(errorMessage);
}

export async function getPostById(postId) {
  const response = await authFetch(
    `${API_POSTS_URL}/${postId}${API_PARAMS_POSTS}`,
  );

  const responseData = await response.json();

  if (response.ok) {
    return responseData;
  }

  const errorMessage =
    responseData?.errors[0]?.message ||
    `Failed to get the post with the id: ${postId}`;
  throw new Error(errorMessage);
}
