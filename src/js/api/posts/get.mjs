import { authFetch } from "../index.mjs";
import { API_POSTS_URL, API_PARAMS_POSTS } from "../../constants/index.mjs";

export async function getPosts(page, limit) {
  try {
    const response = await authFetch(
      `${API_POSTS_URL}${API_PARAMS_POSTS}&page=${page}&limit=${limit}`,
    );

    const responseData = await response.json();

    if (response.ok) {
      return responseData;
    }

    const errorMessage =
      responseData?.errors[0]?.message || "Failed to retrieve the posts";

    throw new Error(errorMessage);
  } catch (error) {
    throw error;
  }
}

export async function getPostById(postId) {
  try {
    const response = await authFetch(
      `${API_POSTS_URL}/${postId}${API_PARAMS_POSTS}`,
    );

    const responseData = await response.json();

    if (response.ok) {
      return responseData;
    }

    const errorMessage =
      responseData?.errors[0]?.message || "Failed to retrieve the post";

    throw new Error(errorMessage);
  } catch (error) {
    throw error;
  }
}
