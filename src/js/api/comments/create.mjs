import { authFetch } from "../index.mjs";
import { API_POSTS_URL, API_COMMENT } from "../../constants/index.mjs";

/**
 * Creates a comment on a post by sending a POST request to the comment endpoint.
 *
 * @param {number} postId - The id of the post.
 * @param {Object} commentData - The comment data.
 * @param {string} commentData.body - The body text of a comment.
 *
 * @returns {Object} An object containing the created comment and meta data upon successful creation.
 * @throws {Error} If there is an error during the creation process.
 */
export async function createComment(postId, commentData) {
  try {
    const response = await authFetch(
      `${API_POSTS_URL}/${postId}${API_COMMENT}`,
      {
        method: "POST",
        body: JSON.stringify(commentData),
      },
    );

    const responseData = await response.json();

    if (response.ok) {
      return responseData;
    }

    const errorMessage =
      responseData?.errors[0]?.message || "Failed to create the comment";

    throw new Error(errorMessage);
  } catch (error) {
    throw error;
  }
}
