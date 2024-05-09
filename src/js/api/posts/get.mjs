import { authFetch } from "../index.mjs";
import { API_POSTS_URL, API_PARAMS_POSTS } from "../../constants/index.mjs";

/**
 * Gets posts by sending a GET request to the posts endpoint.
 *
 * @param {number} page - The page of results to retrieve.
 * @param {number} limit - The maximum number of results per page.
 *
 * @returns {Object} An object containing the posts and meta data upon successful retrieval.
 * @throws {Error} If there is an error during the retrieval process.
 */
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

/**
 * Gets a post by it's id by sending a GET request to the posts endpoint.
 *
 * @param {number} postId - The id of the post.
 *
 * @returns {Object} An object containing the post and meta data upon successful retrieval.
 * @throws {Error} If there is an error during the retrieval process.
 */
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
