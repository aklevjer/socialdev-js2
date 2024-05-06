import { authFetch } from "../index.mjs";
import { API_POSTS_URL, API_COMMENT } from "../../constants/index.mjs";

export async function removeComment(postId, commentId) {
  try {
    const response = await authFetch(
      `${API_POSTS_URL}/${postId}${API_COMMENT}/${commentId}`,
      {
        method: "DELETE",
      },
    );

    if (response.ok) {
      return;
    }

    const responseData = await response.json();

    const errorMessage =
      responseData?.errors[0]?.message || "Failed to delete the comment";

    throw new Error(errorMessage);
  } catch (error) {
    throw error;
  }
}
