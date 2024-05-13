import { authFetch } from "../index.mjs";
import { API_POSTS_URL } from "../../constants/index.mjs";

/**
 * Deletes a post by sending a DELETE request to the posts endpoint.
 *
 * @param {number} postId - The id of the post.
 *
 * @returns {null} Returns "null" if the post is deleted successfully.
 * @throws {Error} If there is an error during the delete process.
 */
export async function removePost(postId) {
  try {
    const response = await authFetch(`${API_POSTS_URL}/${postId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      return null;
    }

    const responseData = await response.json();

    const errorMessage =
      responseData?.errors[0]?.message || "Failed to delete the post";

    throw new Error(errorMessage);
  } catch (error) {
    throw error;
  }
}
