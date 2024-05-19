import { authFetch } from "../index.mjs";
import { API_POSTS_URL } from "../../constants/index.mjs";

/**
 * Updates a post by sending a PUT request to the posts endpoint.
 *
 * @param {number} postId - The id of the post.
 * @param {Object} postData - The post data.
 * @param {string} postData.title - The title of the post (Required).
 * @param {string} [postData.body] - The body text of the post (Optional).
 * @param {string[]} [postData.tags] - An array of tags for the post (Optional).
 * @param {Object} [postData.media] - A media object for the post (Optional).
 * @param {string} [postData.media.url] - The URL to the media object for the post (Optional).
 * @param {string} [postData.media.alt] - The alternative text to the media object for the post (Optional).
 *
 * @returns {Object} An object containing the updated post and meta data upon successful update.
 * @throws {Error} If there is an error during the update process.
 */
export async function updatePost(postId, postData) {
  try {
    const response = await authFetch(`${API_POSTS_URL}/${postId}`, {
      method: "PUT",
      body: JSON.stringify(postData),
    });

    const responseData = await response.json();

    if (response.ok) {
      return responseData;
    }

    const errorMessage =
      responseData?.errors[0]?.message || "Failed to edit the post";

    throw new Error(errorMessage);
  } catch (error) {
    throw error;
  }
}
