import { authFetch } from "../index.mjs";
import { API_SEARCH_URL, API_PARAMS_POSTS } from "../../constants/index.mjs";

/**
 * Searches for posts by sending a GET request to the search endpoint with a query.
 *
 * @param {string} query - The search query.
 * @param {number} page - The page of results to retrieve.
 * @param {number} limit - The maximum number of results per page.
 *
 * @returns {Object} An object containing the posts and meta data upon successful search.
 * @throws {Error} If there is an error during the search process.
 */
export async function searchPosts(query, page, limit) {
  try {
    const response = await authFetch(
      `${API_SEARCH_URL}${API_PARAMS_POSTS}&q=${query}&page=${page}&limit=${limit}`,
    );

    const responseData = await response.json();

    if (response.ok) {
      return responseData;
    }

    const errorMessage =
      responseData?.errors[0]?.message || "Failed to search the posts";

    throw new Error(errorMessage);
  } catch (error) {
    throw error;
  }
}
