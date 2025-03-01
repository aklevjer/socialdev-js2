import { authFetch } from "../index.mjs";
import { API_POSTS_URL, API_PARAMS_POSTS } from "../../constants/index.mjs";

/**
 * Gets posts by a tag by sending a GET request to the posts endpoint with the "_tag" query flag.
 *
 * @param {string} tag - The tag to get posts from.
 * @param {number} page - The page of results to retrieve.
 * @param {number} limit - The maximum number of results per page.
 *
 * @returns {Object} An object containing the posts and meta data upon successful retrieval.
 * @throws {Error} If there is an error during the retrieval process.
 */
export async function getPostsByTag(tag, page, limit) {
  try {
    const response = await authFetch(
      `${API_POSTS_URL}${API_PARAMS_POSTS}&_tag=${tag}&page=${page}&limit=${limit}`,
    );

    const responseData = await response.json();

    if (response.ok) {
      return responseData;
    }

    const errorMessage =
      responseData?.errors[0]?.message || "Failed to filter the posts";

    throw new Error(errorMessage);
  } catch (error) {
    throw error;
  }
}
