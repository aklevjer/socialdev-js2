import { authFetch } from "../index.mjs";
import { API_POSTS_URL } from "../../constants/index.mjs";

export async function removePost(postId) {
  try {
    const response = await authFetch(`${API_POSTS_URL}/${postId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      return;
    }

    const responseData = await response.json();

    const errorMessage =
      responseData?.errors[0]?.message || "Failed to delete the post";

    throw new Error(errorMessage);
  } catch (error) {
    throw error;
  }
}
