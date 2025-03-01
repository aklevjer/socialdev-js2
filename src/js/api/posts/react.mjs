import { authFetch } from "../index.mjs";
import { API_POSTS_URL, API_REACT } from "../../constants/index.mjs";

/**
 * Reacts to a post by sending a PUT request to the react endpoint with a heart symbol.
 *
 * @param {number} postId - The id of the post.
 *
 * @returns {Object} An object containing the reaction and meta data upon successful reaction.
 * @throws {Error} If there is an error during the reaction process.
 */
export async function reactToPost(postId) {
  try {
    const response = await authFetch(
      `${API_POSTS_URL}/${postId}${API_REACT}/❤️`,
      {
        method: "PUT",
      },
    );

    const responseData = await response.json();

    if (response.ok) {
      return responseData;
    }

    const errorMessage =
      responseData?.errors[0]?.message || "Failed to like the post";

    throw new Error(errorMessage);
  } catch (error) {
    throw error;
  }
}
